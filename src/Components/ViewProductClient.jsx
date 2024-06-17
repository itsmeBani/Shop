import React, {useContext, useState} from 'react';
import {Button, Dialog, DialogBody, DialogFooter, DialogHeader, IconButton} from "@material-tailwind/react";
import {ShoppingCartIcon, XMarkIcon} from "@heroicons/react/24/outline/index.js";
import {AddtoCart} from "../AxiosAdmin.js";
import {CurrentUserContext} from "./CurrentUserProvider.jsx";
import SuccessAlert from "./SuccessAlert.jsx";

export function ViewProductClient({HandleViewProduct, VieProduct,name, price, description, label, imageUrl, product_id}) {
    const {
        session,
        opensignin,
        handleOpenSignin,
        setopensignin,
        clientsession,
        refreshcart,
        setRefreshCart,
        setClientToken
    } = useContext(CurrentUserContext)
    const [Success, setSuccess] = useState(false);
    const handleCart = async (user_id, product_id) => {

        if (user_id) {


            try {
                const response = await AddtoCart(user_id, product_id)
                console.log(response)
                setRefreshCart(!refreshcart)
                HandleViewProduct()
                setSuccess(true)


                const interval = setTimeout(() => {
                    setSuccess(false)

                }, 2000)


                return () => clearTimeout(interval);

            } catch (err) {
                alert("cant add")
            }
        }else {
            HandleViewProduct()
            handleOpenSignin()
        }
    }

    return (
    <>
        {
            Success && <SuccessAlert txt="Added To Cart"/>

        }
        <div className="">

            <Dialog open={VieProduct} handler={HandleViewProduct} size="xxl" className="h-auto flex left-0  w-full right-0 p-0 fixed md:flex md:place-items-center md:justify-center">

                <DialogBody className="p-0 h-auto  pb-10 px-" >
                    <div className="">
                        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
                            <div className="flex flex-col  md:flex-row -mx-4">
                                <div className="md:flex-1 ">
                                    <div className="h-[300px]   md:w-[500px] md:h-[500px] w-full rounded-lg bg-gray-300 p-10 dark:bg-gray-700 mb-4">
                                        <img className="w-full  h-full object-contain   rounded-lg md:opacity-100"
                                             src={imageUrl} alt="Product Image"/>
                                    </div>

                                </div>
                                <div className="md:flex-1 px-4">
                                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{name}</h2>

                                    <div className="flex mb-4">
                                        <div className="mr-4">
                                            <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                                            <span className="text-gray-600 dark:text-gray-300">P{new Intl.NumberFormat('en-US').format(price)}</span>
                                        </div>
                                        <div>
                                            <span
                                                className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                                            <span className="text-gray-600 dark:text-gray-300">In Stock</span>
                                        </div>
                                    </div>

                                    <div className="mb-1 flex gap-2">
                                        <span className="font-bold text-gray-700 dark:text-gray-300">Category:</span>
                                        <div className="flex items-center ">
                                            <div
                                                className="bg-blue-100 dark:bg-gray-700 text-gray-700 dark:text-white   text-sm py-1 px-2 rounded-full  mr-2  dark:hover:bg-gray-600">{label}
                                            </div>

                                        </div>
                                    </div>
                                    <div className="flex flex-col  ">
                                        <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                                        <p className="h-[160px] flex flex-col overflow-scroll text-gray-600 dark:text-gray-300 text-sm mt-2">
                                            {description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <XMarkIcon onClick={HandleViewProduct}
                               className=" absolute  top-0 md:-top-10 p-1 right-0 w-10 h-10  text-blue-gray-700  "/>




                    <div className=" flex  w-full fixed bg-white bottom-0 right-0 block  gap-2 ">
                        <div className="flex w-full p-3 place-items-center justify-end ">

                            <h1  className="text-blue-500 text-lg font-bold">₱{new Intl.NumberFormat('en-US').format(price) }</h1>
                        </div>

                        <div className="flex w-full md:w-[400px] ">

                            <Button onClick={() => {
                                handleCart(clientsession, product_id)


                            }}
                                    className=" flex w-full justify-center rounded-none  place-items-center gap-2"
                                    type="button">
                                <ShoppingCartIcon className="w-5 h-5"/> <p>Add to Cart </p>
                            </Button>
                        </div>

                    </div>


                </DialogBody>

            </Dialog>
        </div>
    </>
    );
};