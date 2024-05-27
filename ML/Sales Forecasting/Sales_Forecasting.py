import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from statsmodels.tsa.arima.model import ARIMA
from sklearn.metrics import mean_squared_error
from extract_ordersdata import orders_df

# Display the first few rows to inspect the data
print(orders_df.head())

# Check the column names and data types
print(orders_df.dtypes)

# Ensure the 'order_date' column is in datetime format
# Here, we'll just assume there was an error in the example, and we'll fix it by creating a sample date range
orders_df['order_date'] = pd.date_range(start='2022-01-01', periods=len(orders_df), freq='D')

# Inspect the DataFrame to see if 'order_date' is correctly formatted
print(orders_df.head())

# Replace 'product_id' with the actual sales column if available
# Assuming we have a sales column, named 'sales_amount' (adjust accordingly)
if 'sales_amount' not in orders_df.columns:
    orders_df['sales_amount'] = orders_df['product_id']  # Temporarily using 'product_id'

# Summarize sales by date if there are multiple entries per date
data = orders_df.groupby('order_date')['sales_amount'].sum().reset_index()
data.columns = ['date', 'sales']

# Set 'date' column as the index
data.set_index('date', inplace=True)

# Sort the data by date if necessary
data = data.sort_index()

# Plot sales data
plt.figure(figsize=(10,6))
plt.plot(data, label='Sales')
plt.title('Sales Data')
plt.xlabel('Date')
plt.ylabel('Sales')
plt.legend()
plt.xticks(rotation=45, ha='right')  # Rotate the x-axis labels for better readability
plt.tight_layout()  # Adjust layout to make room for rotated labels
plt.show()

# Split data into train and test
train_size = int(len(data) * 0.8)
train, test = data[0:train_size], data[train_size:]

# Fit ARIMA model
model = ARIMA(train, order=(5,1,0))  # order=(p,d,q)
model_fit = model.fit()
print(model_fit.summary())

# Forecast
forecast, stderr, conf_int = model_fit.forecast(steps=len(test))

# Evaluate the model
mse = mean_squared_error(test, forecast)
print(f'Mean Squared Error: {mse}')

# Convert forecast to a pandas Series with the same index as the test set
forecast_series = pd.Series(forecast, index=test.index)

# Plot training data and fitted values
plt.figure(figsize=(10,6))
plt.plot(train, label='Training Data')
plt.plot(train.index, model_fit.fittedvalues, color='red', label='Fitted Values')
plt.title('Training Data and Fitted Values')
plt.xlabel('Date')
plt.ylabel('Sales')
plt.legend()
plt.xticks(rotation=45, ha='right')  # Rotate the x-axis labels for better readability
plt.tight_layout()  # Adjust layout to make room for rotated labels
plt.show()

# Plot actual vs forecast
plt.figure(figsize=(10,6))
plt.plot(test, label='Actual Sales')
plt.plot(forecast_series, label='Forecasted Sales', color='red')
plt.fill_between(test.index, conf_int[:,0], conf_int[:,1], color='pink', alpha=0.3)
plt.title('Actual vs Forecasted Sales')
plt.xlabel('Date')
plt.ylabel('Sales')
plt.legend()
plt.xticks(rotation=45, ha='right')  # Rotate the x-axis labels for better readability
plt.tight_layout()  # Adjust layout to make room for rotated labels
plt.show()