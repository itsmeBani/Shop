// components/Card.js
import React, {useContext, useState} from 'react';
import { Button } from "@material-tailwind/react";
import {AddtoCart} from "../AxiosAdmin.js";
import {CurrentUserContext} from "./CurrentUserProvider.jsx";
import {json} from "react-router-dom";
import SuccessAlert from "./SuccessAlert.jsx";

function Card({ name, price, description, imageUrl,product_id }) {

    const  {session,opensignin,handleOpenSignin,setopensignin,clientsession,refreshcart,setRefreshCart,setClientToken} = useContext(CurrentUserContext)

    let user;
    try {
        user = JSON.parse(clientsession);
    } catch (error) {
        console.error('Error parsing JSON:', error);
        user = null;
    }

    const handleCart = async (user_id, product_id) => {

   if (user_id){


       try {
           const  response=await AddtoCart(user_id, product_id)
          console.log(response)
           setRefreshCart(!refreshcart)

       }catch(err) {
           alert("cant add")
       }
   }
    }
    return (
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl  w-full">

            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-26">
                <img
                    src={imageUrl}
                    alt={name}
                    className="object-contain  w-full h-full"
                />
            </div>
            <div className="md:p-6  p-2 ">
                <div className="flex items-center flex-col   md:flex-row   justify-between mb-2">
                    <p className="block font-sans line-clamp-2   text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                        {name}
                    </p>
                    <p className="block  line-clamp-1 font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                        {price}
                    </p>
                </div>
                <p className=" max-h-[60px]  line-clamp-2   font-sans text-sm  font-normal leading-normal text-gray-700 opacity-75">
                    {description}
                </p>

            </div>
            <div className="p-6 pt-0">
                <Button onClick={()=>{

                    handleCart(user?.user_id,product_id)

                }}
                    className="w-full"
                    type="button">
                    Add to Cart
                </Button>
            </div>

            <div>


            </div>
        </div>




    );
}

export default Card;
