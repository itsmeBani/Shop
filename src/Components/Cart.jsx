import React, {useContext, useEffect, useState} from 'react';
import {Button, IconButton} from "@material-tailwind/react";
import {DeleteCart, getALLProduct, updateCartItemQuantity, ViewCart} from "../AxiosAdmin.js";
import {MinusIcon, PlusIcon, ShoppingCartIcon} from "@heroicons/react/24/outline/index.js";
import {CurrentUserContext} from "./CurrentUserProvider.jsx";

function Cart({setcart}) {

    const {    refreshcart,setRefreshCart, viewcart,setViewCart,} = useContext(CurrentUserContext);




    const  RemoveCart = async (id)=>{

        try {
            const response = await DeleteCart(id)
            console.log(response.data)
            setRefreshCart(!refreshcart)
        } catch (error) {
            console.error('Error fetching current user', error);
            setRefreshCart(!refreshcart)

        }

    }
const  HandleQuantity= async (cartid,quantity)=>{
    try {
        const response = await   updateCartItemQuantity(cartid,quantity)
        console.log(response.data)
        setRefreshCart(!refreshcart)
    } catch (error) {
        console.error('Error fetching current user', error);
    }
}
let total=0

    for (let i = 0; i < viewcart?.length; i++) {
        total +=parseFloat(viewcart[i].quantity * viewcart[i].price)
        console.log(total)
    }



    return (
        <>

            <div className="relative z-[222222]" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <div className="pointer-events-auto w-screen max-w-md">
                                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                    <div className="flex-1  place-items-center justify-center overflow-y-auto px-4 py-6 sm:px-6">
                                        <div className="flex items-start justify-between">
                                            <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                                            <div className="ml-3 flex h-7 items-center">
                                                <button type="button" onClick={()=>{setcart(false)}} className="relative -m-2 p-2 text-gray-400 hover:text-gray-500">
                                                    <span className="absolute -inset-0.5"></span>
                                                    <span className="sr-only">Close panel</span>
                                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div> <div className="mt-8 h-full">
                                        <div className="flow-root h-full">
                                            <ul role="list" className="-my-6 h-full divide-y divide-gray-200">
                                                {
                                                    viewcart?.map((cart)=>{

                                                        return (

                                                            <li className="flex  py-6" key={cart.cart_id}>
                                                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                    <img
                                                                        src={cart.imageUrl}
                                                                        alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                                                                        className="h-full w-full object-cover object-center"
                                                                    />
                                                                </div>

                                                                <div className="ml-4 flex flex-1 flex-col">
                                                                    <div>
                                                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                                                            <h3>
                                                                                <a href="#">{cart.product_name}</a>
                                                                            </h3>
                                                                            <p className="ml-4">₱{(cart.price * cart.quantity).toLocaleString()}</p>
                                                                        </div>
                                                                        <p className="mt-1 text-sm text-gray-500">{cart.label}</p>
                                                                    </div>
                                                                    <div className="flex flex-1 items-end justify-between text-sm">
                                                                        <p className="text-gray-500 flex place-items-center font-bold gap-1"><Button className="p-1 bg-red-500/80" onClick={()=>{HandleQuantity(cart.cart_id,cart.quantity-1)}} disabled={cart.quantity<=1}> <MinusIcon className="w-5 h-5"/></Button >{cart.quantity}x<Button className="p-1 bg-blue-500/80" onClick={()=>{HandleQuantity(cart.cart_id,cart.quantity+1)}}><PlusIcon className="w-5 h-5"/></Button></p>

                                                                        <div className="flex">
                                                                            <button onClick={()=>{

                                                                                RemoveCart(cart.cart_id)
                                                                            }} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                                                Remove
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>

                                                        )})
                                                }


                                                {/*<div className=" h-full flex w-full    place-items-center justify-center   text-center" ><ShoppingCartIcon className="h-[40px] w-[50px] text-black/60"/>   <p className="mt-0.5 text-sm text-gray-500">Empty Cart </p> </div>*/}
                                                {/*// }*/}

                                            </ul>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                            <p>Subtotal</p>
<p>₱{ total.toLocaleString()}</p>
                                        </div>
                                        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                        <div className="mt-6">
                                            <Button className="flex items-center justify-center rounded-md border border-transparent w-full px-6 py-3 text-base  text-white shadow-sm ">Checkout</Button>
                                        </div>
                                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                            <p>
                                                or
                                                <button type="button" onClick={()=>{setcart(false)}} className="ml-2 font-medium text-indigo-600 hover:text-indigo-500">
                                                    Continue Shopping
                                                    <span aria-hidden="true"> &rarr;</span>
                                                </button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;