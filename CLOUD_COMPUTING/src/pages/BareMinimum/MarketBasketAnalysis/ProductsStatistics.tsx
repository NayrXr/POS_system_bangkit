import TableContainer from 'Common/TableContainer';
import React, { useMemo, useState,useEffect } from 'react';
import fetchData from './data/dataMBA';
import { CheckCircle2, Search, XCircle } from 'lucide-react';
import filterDataBySearch from 'Common/filterDataBySearch';

const ProductsStatistics = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const dataMBA = await fetchData();
            setData(dataMBA);
        };
        getData();
    }, []);

    // Search Data
    const filterSearchData = (e: any) => {
        const search = e.target.value;
        const keysToSearch = ['antecedents', 'confidence'];
        filterDataBySearch(data, search, keysToSearch, setData);
    };

    const columns = useMemo(() => [
        {
            header: "Antecedents",
            accessorKey: "antecedents",
            enableColumnFilter: false,
            enableSorting: true,
        },
        {
            header: "Consequents",
            accessorKey: "consequents",
            enableColumnFilter: false,
            enableSorting: true,
        },
        {
            header: "Confidence",
            accessorKey: "confidence",
            enableColumnFilter: false,
            enableSorting: true,
        },
        {
            header: "Lift",
            accessorKey: "lift",
            enableColumnFilter: false,
            enableSorting: true,
        },
        {
            header: "Support",
            accessorKey: "support",
            enableColumnFilter: false,
            enableSorting: true,
        },
    ], []
    );
    return (
        <React.Fragment>
            <div className="order-11 col-span-12 2xl:order-1 card 2xl:col-span-12">
                <div className="card-body">
                    <div className="grid items-center grid-cols-1 gap-3 mb-5 xl:grid-cols-12">
                        <div className="xl:col-span-3">
                            <h6 className="text-15">Products MBA</h6>
                        </div>
                        <div className="xl:col-span-3 xl:col-start-10">
                            <div className="flex gap-3">
                                <div className="relative grow">
                                    <input type="text" className="ltr:pl-8 rtl:pr-8 search form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Search for ..." autoComplete="off" onChange={(e) => filterSearchData(e)} />
                                    <Search className="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600"></Search>
                                </div>
                            </div>
                        </div>
                    </div>
                    <TableContainer
                        isPagination={true}
                        columns={(columns || [])}
                        data={(data || [])}
                        customPageSize={10}
                        divclassName="-mx-5 overflow-x-auto"
                        tableclassName="w-full whitespace-nowrap"
                        theadclassName="ltr:text-left rtl:text-right bg-slate-100 text-slate-500 dark:text-zink-200 dark:bg-zink-600"
                        thclassName="px-3.5 py-2.5 first:pl-5 last:pr-5 font-semibold border-y border-slate-200 dark:border-zink-500 w-10"
                        tdclassName="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500"
                        PaginationClassName="flex flex-col items-center mt-5 md:flex-row"
                    />
                </div>
            </div>
        </React.Fragment>
    );
};

export default ProductsStatistics;
