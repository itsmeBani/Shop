// components/Card.js
import React, {useContext, useState} from 'react';
import {Button, IconButton} from "@material-tailwind/react";
import {AddtoCart} from "../AxiosAdmin.js";
import {CurrentUserContext} from "./CurrentUserProvider.jsx";
import {json} from "react-router-dom";
import SuccessAlert from "./SuccessAlert.jsx";
import {ShoppingCartIcon} from "@heroicons/react/24/outline/index.js";
import {ViewProductClient} from "./ViewProductClient.jsx";

function Card({name, price, description, imageUrl, product_id, label}) {

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
    const [VieProduct, setVieProduct] = useState(false);



    const HandleViewProduct = () => {
        setVieProduct(!VieProduct)
    };

    return (
        <>

            <ViewProductClient
                VieProduct={VieProduct}
                HandleViewProduct={HandleViewProduct}
                name={name} price={price} label={label} description={description} imageUrl={imageUrl}
                               product_id={product_id}/>
            <div onClick={HandleViewProduct} className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl  w-full">

                <div
                    className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded- h-26">
                    <img
                        src={imageUrl}
                        alt={name}
                        className="object-contain w-full h-[90px] md:h-[200px]"
                    />
                </div>
                <div className="md:p-6  px-3  pb-0">
                    <div className="flex flex-col   md:flex-col   justify-between mb-">
                        <p className=" w-full font-sans font-normal line-clamp-1  max-h-[60px]   text-[13px]  md:text-base antialiased  text-blue-gray-900">
                            {name}
                        </p>
                        <p className="  line-clamp-1 font-sans text-base antialiased text-xs md:text-[15px] md:mt-2 md:text-md  text-blue-500">
                            ₱{ new Intl.NumberFormat('en-US').format(price)}
                        </p>
                    </div>
                    <p className=" max-h-[60px]  line-clamp-1 pr-2     font-sans text-sm  font-normal  text-gray-700 opacity-75">
                        {description}
                    </p>

                </div>
                <div className=" p-1 md:px-6 md:pb-6  pt-0 flex w-full place-items-center justify-end">
                    <Button   className="w-full hidden md:block"
                            type="button ">
                        Add to Cart
                    </Button>

                    <IconButton
                                className="w-full block md:hidden bg-transparent shadow-none p-0 text-gray-700"
                                type="button">
                        <ShoppingCartIcon className="w-5 h-5"/>
                    </IconButton>

                </div>

                <div>


                </div>
            </div>

        </>


    );
}

export default Card;
