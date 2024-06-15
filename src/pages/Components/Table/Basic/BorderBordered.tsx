import React from "react";

const BorderBordered = () => {
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-15">Border Colors</h6>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="ltr:text-left rtl:text-right ">
                                <tr>
                                    <th className="px-3.5 py-2.5 font-semibold border border-custom-500 dark:border-custom-800">Order ID</th>
                                    <th className="px-3.5 py-2.5 font-semibold border border-custom-500 dark:border-custom-800">Shop</th>
                                    <th className="px-3.5 py-2.5 font-semibold border border-custom-500 dark:border-custom-800">Customer</th>
                                    <th className="px-3.5 py-2.5 font-semibold border border-custom-500 dark:border-custom-800">Price</th>
                                    <th className="px-3.5 py-2.5 font-semibold border border-custom-500 dark:border-custom-800">Action</th>
                                </tr>
                            </thead>
                            <tbody className="">
                                <tr>
                                    <td className="px-3.5 py-2.5 border border-custom-500 dark:border-custom-800"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">#541254265</a></td>
                                    <td className="px-3.5 py-2.5 border border-custom-500 dark:border-custom-800">Amezon</td>
                                    <td className="px-3.5 py-2.5 border border-custom-500 dark:border-custom-800">Cleo Carson</td>
                                    <td className="px-3.5 py-2.5 border border-custom-500 dark:border-custom-800">$4,521</td>
                                    <td className="px-3.5 py-2.5 border border-custom-500 dark:border-custom-800"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600"><i className="ri-download-2-line"></i></a></td>
                                </tr>
                                <tr>
                                    <td className="px-3.5 py-2.5 border border-custom-500 dark:border-custom-800"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">#744145235</a></td>
                                    <td className="px-3.5 py-2.5 border border-custom-500 dark:border-custom-800">Shoppers</td>
                                    <td className="px-3.5 py-2.5 border border-custom-500 dark:border-custom-800">Juston Eichmann</td>
                                    <td className="px-3.5 py-2.5 border border-custom-500 dark:border-custom-800">$7,546</td>
                                    <td className="px-3.5 py-2.5 border border-custom-500 dark:border-custom-800"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600"><i className="ri-download-2-line"></i></a></td>
                                </tr>
                                <tr>
                                    <td className="px-3.5 py-2.5 border border-custom-500 dark:border-custom-800"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">#9855126598</a></td>
                                    <td className="px-3.5 py-2.5 border border-custom-500 dark:border-custom-800">Flipkart</td>
                                    <td className="px-3.5 py-2.5 border border-custom-500 dark:border-custom-800">Bettie Johson</td>
                                    <td className="px-3.5 py-2.5 border border-custom-500 dark:border-custom-800">$1,350</td>
                                    <td className="px-3.5 py-2.5 border border-custom-500 dark:border-custom-800"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600"><i className="ri-download-2-line"></i></a></td>
                                </tr>
                                <tr>
                                    <td className="px-3.5 py-2.5 border border-custom-500 dark:border-custom-800"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">#847512653</a></td>
                                    <td className="px-3.5 py-2.5 border border-custom-500 dark:border-custom-800">Tailwick</td>
                                    <td className="px-3.5 py-2.5 border border-custom-500 dark:border-custom-800">Maritza Blanda</td>
                                    <td className="px-3.5 py-2.5 border border-custom-500 dark:border-custom-800">$4,521</td>
                                    <td className="px-3.5 py-2.5 border border-custom-500 dark:border-custom-800"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600"><i className="ri-download-2-line"></i></a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-15">Bordered Table</h6>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="ltr:text-left rtl:text-right ">
                                <tr>
                                    <th className="px-3.5 py-2.5 font-semibold border border-slate-200 dark:border-zink-500">Order ID</th>
                                    <th className="px-3.5 py-2.5 font-semibold border border-slate-200 dark:border-zink-500">Shop</th>
                                    <th className="px-3.5 py-2.5 font-semibold border border-slate-200 dark:border-zink-500">Customer</th>
                                    <th className="px-3.5 py-2.5 font-semibold border border-slate-200 dark:border-zink-500">Price</th>
                                    <th className="px-3.5 py-2.5 font-semibold border border-slate-200 dark:border-zink-500">Action</th>
                                </tr>
                            </thead>
                            <tbody className="">
                                <tr>
                                    <td className="px-3.5 py-2.5 border border-slate-200 dark:border-zink-500"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">#541254265</a></td>
                                    <td className="px-3.5 py-2.5 border border-slate-200 dark:border-zink-500">Amezon</td>
                                    <td className="px-3.5 py-2.5 border border-slate-200 dark:border-zink-500">Cleo Carson</td>
                                    <td className="px-3.5 py-2.5 border border-slate-200 dark:border-zink-500">$4,521</td>
                                    <td className="px-3.5 py-2.5 border border-slate-200 dark:border-zink-500"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600"><i className="ri-download-2-line"></i></a></td>
                                </tr>
                                <tr>
                                    <td className="px-3.5 py-2.5 border border-slate-200 dark:border-zink-500"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">#744145235</a></td>
                                    <td className="px-3.5 py-2.5 border border-slate-200 dark:border-zink-500">Shoppers</td>
                                    <td className="px-3.5 py-2.5 border border-slate-200 dark:border-zink-500">Juston Eichmann</td>
                                    <td className="px-3.5 py-2.5 border border-slate-200 dark:border-zink-500">$7,546</td>
                                    <td className="px-3.5 py-2.5 border border-slate-200 dark:border-zink-500"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600"><i className="ri-download-2-line"></i></a></td>
                                </tr>
                                <tr>
                                    <td className="px-3.5 py-2.5 border border-slate-200 dark:border-zink-500"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">#9855126598</a></td>
                                    <td className="px-3.5 py-2.5 border border-slate-200 dark:border-zink-500">Flipkart</td>
                                    <td className="px-3.5 py-2.5 border border-slate-200 dark:border-zink-500">Bettie Johson</td>
                                    <td className="px-3.5 py-2.5 border border-slate-200 dark:border-zink-500">$1,350</td>
                                    <td className="px-3.5 py-2.5 border border-slate-200 dark:border-zink-500"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600"><i className="ri-download-2-line"></i></a></td>
                                </tr>
                                <tr>
                                    <td className="px-3.5 py-2.5 border border-slate-200 dark:border-zink-500"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">#847512653</a></td>
                                    <td className="px-3.5 py-2.5 border border-slate-200 dark:border-zink-500">Tailwick</td>
                                    <td className="px-3.5 py-2.5 border border-slate-200 dark:border-zink-500">Maritza Blanda</td>
                                    <td className="px-3.5 py-2.5 border border-slate-200 dark:border-zink-500">$4,521</td>
                                    <td className="px-3.5 py-2.5 border border-slate-200 dark:border-zink-500"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600"><i className="ri-download-2-line"></i></a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default BorderBordered;