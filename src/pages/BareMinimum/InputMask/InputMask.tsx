import React from "react";
import Cleave from "cleave.js/react";
import "../../../../node_modules/cleave.js/dist/addons/cleave-phone.in.js";

const InputMask = () => {
    return (
        <React.Fragment>
            <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Tambah Barang</h6>
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-2">
                            <div>
                                <label htmlFor="cleaveNamaBarang" className="inline-block mb-2 text-base font-medium">Nama Barang</label>
                                <Cleave
                                    placeholder="Masukan Nama Barang"
                                    options={{ }}
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                />
                            </div>
                            <div>
                                <label htmlFor="cleaveDelimiter" className="inline-block mb-2 text-base font-medium">Delimiter</label>
                                <Cleave
                                    placeholder="xxx·xxx·xxx"
                                    options={{
                                        delimiter: '·',
                                        blocks: [3, 3, 3],
                                        uppercase: true
                                    }}
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                />
                            </div>
                            <div>
                                <label htmlFor="cleaveDelimiters" className="inline-block mb-2 text-base font-medium">Delimiters</label>
                                <Cleave
                                    placeholder="xxx.xxx.xxx-xx"
                                    options={{
                                        delimiters: ['.', '.', '-'],
                                        blocks: [3, 3, 3, 2],
                                        uppercase: true
                                    }}
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                />
                            </div>
                            <div>
                                <label htmlFor="cleavePrefix" className="inline-block mb-2 text-base font-medium">Prefix</label>
                                <Cleave
                                    placeholder="xxx.xxx.xxx-xx"
                                    options={{
                                        prefix: 'PREFIX',
                                        delimiter: '-',
                                        blocks: [6, 4, 4, 4],
                                        uppercase: true
                                    }}
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                />
                            </div>
                            <div>
                                <label htmlFor="cleavePhone" className="inline-block mb-2 text-base font-medium">Phone</label>
                                <Cleave
                                    placeholder="xxxx xxx xxx"
                                    options={{
                                        phone: true,
                                        phoneRegionCode: "IN"
                                    }}
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                />
                            </div>
                            <div>
                                <label htmlFor="cleaveNumeral" className="inline-block mb-2 text-base font-medium">Numeral Formatting</label>
                                <Cleave
                                    placeholder="Enter numeral"
                                    options={{
                                        numeral: true,
                                        numeralThousandsGroupStyle: 'thousand'
                                    }}
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </React.Fragment>
    );
}

export default InputMask;