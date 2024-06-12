import React from 'react';
import {Button, Dialog, DialogBody, DialogFooter, DialogHeader} from "@material-tailwind/react";
import {XMarkIcon} from "@heroicons/react/24/outline/index.js";

export function ViewAdminProduct({HandleViewProduct,VieProduct,selectedProduct}) {


    return (
        <>

            <Dialog open={VieProduct} handler={HandleViewProduct} size="lg" className="">

                <DialogBody className="p-0">
                    <div className=" py-8">
                        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex flex-col md:flex-row -mx-4">
                                <div className="md:flex-1 px-4">
                                    <div className="h-[300px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                        <img className="w-full h-full object-contain  rounded-lg"
                                             src={selectedProduct?.imageUrl}  alt="Product Image"/>
                                    </div>

                                </div>
                                <div className="md:flex-1 px-4">
                                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{selectedProduct?.name}</h2>

                                    <div className="flex mb-4">
                                        <div className="mr-4">
                                            <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                                            <span className="text-gray-600 dark:text-gray-300">P{selectedProduct?.price}</span>
                                        </div>
                                        <div>
                                            <span
                                                className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                                            <span className="text-gray-600 dark:text-gray-300">In Stock</span>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <span className="font-bold text-gray-700 dark:text-gray-300">Category:</span>
                                        <div className="flex items-center mt-2">
                                            <div
                                                className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2  dark:hover:bg-gray-600">{selectedProduct?.label}
                                            </div>

                                        </div>
                                    </div>
                                    <div>
                                        <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                            {selectedProduct?.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button

                        color="red"
                        onClick={HandleViewProduct}
                        className=" absolute top-0 p-2 right-0"
                    >
                        <XMarkIcon  className="w-7 h-7  text-blue-gray-700  "/>

                    </button>
                </DialogBody>

            </Dialog>
        </>
    );
};