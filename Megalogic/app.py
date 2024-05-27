import streamlit as st
import mysql.connector
import pandas as pd
from mlxtend.frequent_patterns import apriori, association_rules
from mlxtend.preprocessing import TransactionEncoder
import matplotlib.pyplot as plt
import seaborn as sns
import networkx as nx

# Fetch orders data from MySQL
@st.cache_data
def fetch_orders_data():
    conn = mysql.connector.connect(
        host="192.168.100.12",
        port=8501,
        user="root",
        password="root",
        database="pos_7"
    )

    query = """
        SELECT ID, order_date, ship_date, customer_id, product_id, product_name FROM orders
    """

    cursor = conn.cursor()
    cursor.execute(query)
    data = cursor.fetchall()
    cursor.close()
    conn.close()

    columns = ['ID', 'order_date', 'ship_date', 'customer_id', 'product_id', 'product_name']
    orders_df = pd.DataFrame(data, columns=columns)
    
    return orders_df

def market_basket_analysis(orders_df):
    # Clone the DataFrame to avoid modifying the cached object
    orders_df = orders_df.copy()
    
    # Convert order_date to datetime
    orders_df['order_date'] = pd.to_datetime(orders_df['order_date'])

    # Aggregate products by customer to form transactions
    transactions = orders_df.groupby(['customer_id'])['product_name'].apply(list).reset_index()

    # Prepare data for MBA
    transaction_list = transactions['product_name'].tolist()

    # Transform the transaction data
    transaction_encoder = TransactionEncoder()
    transaction_encoder_ary = transaction_encoder.fit(transaction_list).transform(transaction_list)
    transaction_df = pd.DataFrame(transaction_encoder_ary, columns=transaction_encoder.columns_)

    # Apply Apriori algorithm to find frequent itemsets
    frequent_itemsets = apriori(transaction_df, min_support=0.05, use_colnames=True)

    # Generate association rules
    if not frequent_itemsets.empty:
        rules = association_rules(frequent_itemsets, metric="lift", min_threshold=0.5)

        # Filter out rules with confidence of 1 to avoid infinite conviction
        rules = rules[rules['confidence'] < 1]

        # Add count of occurrences
        rules['count'] = rules.apply(lambda row: sum(transaction_df[list(row['antecedents'])].all(axis=1) & transaction_df[list(row['consequents'])].all(axis=1)), axis=1)

        # Create a column for the basket pair
        rules['basket_pair'] = rules['antecedents'].apply(lambda x: ', '.join(list(x))) + " -> " + rules['consequents'].apply(lambda x: ', '.join(list(x)))

        print("Association Rules Head:")
        print(rules.head())

        return rules
    else:
        return pd.DataFrame()

# Function to create network graph
def draw_network_graph(rules):
    G = nx.DiGraph()

    for _, rule in rules.iterrows():
        antecedents = list(rule['antecedents'])
        consequents = list(rule['consequents'])
        for ant in antecedents:
            for cons in consequents:
                G.add_edge(ant, cons, weight=rule['lift'])

    pos = nx.spring_layout(G, k=0.5, iterations=50)
    plt.figure(figsize=(12, 12))
    nx.draw(G, pos, with_labels=True, node_size=3000, node_color="skyblue", font_size=15, font_weight="bold", arrows=True)
    nx.draw_networkx_edge_labels(G, pos, edge_labels={(ant, cons): f'{weight:.2f}' for ant, cons, weight in G.edges(data='weight')})
    return plt

# Streamlit app
st.title("Market Basket Analysis")

orders_df = fetch_orders_data()
st.write("Orders Data", orders_df)

if st.button("Run Market Basket Analysis"):
    rules = market_basket_analysis(orders_df)
    
    if not rules.empty:
        # Select relevant columns for display
        rules_display = rules[['basket_pair', 'support', 'confidence', 'lift', 'count']]
        st.write("Association Rules", rules_display)
        
        # Create scatter plot for Lift vs Confidence
        fig, ax = plt.subplots()
        sns.scatterplot(data=rules, x='confidence', y='lift', size='count', sizes=(20, 200), ax=ax)
        ax.set_title('Lift vs Confidence')
        ax.set_xlabel('Confidence')
        ax.set_ylabel('Lift')
        st.pyplot(fig)
        st.write("Scatter plot generated successfully.")
        
        # Create network graph
        plt = draw_network_graph(rules)
        st.pyplot(plt)
        st.write("Network graph generated successfully.")
    else:
        st.write("No association rules found. Try lowering the min_threshold value.")
