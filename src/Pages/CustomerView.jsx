import React, {useState} from 'react'

import '../App.css'
import Card from "../Components/Card.jsx";
import {Sidebar} from "../Components/SideBar.jsx";
import {MagnifyingGlassCircleIcon} from "@heroicons/react/16/solid/index.js";
import {MagnifyingGlassIcon, ShoppingCartIcon} from "@heroicons/react/24/outline/index.js";
import {Badge, Button} from "@material-tailwind/react";
import {Route, Router, useParams, Routes} from "react-router-dom";
import ProductList from "../Components/ProductList.jsx";
import Cart from "../Components/Cart.jsx";
import NotFoundPage from "../Components/NotFoundPage.jsx";
import {CurrenUserProvider} from "../Components/CurrentUserProvider.jsx";
import Signin from "../Components/signin.jsx";
import Home from "../Components/Home.jsx";
import Signup from "../Components/Signup.jsx";


function CustomerView(props) {

    return (
        <div className="flex h-auto ">



                <Sidebar/>



            <div className=" gap-3 parentcon w-full flex flex-col overflow-hidden  p-2  md:p-10">



                <div className="flex gap-2 w-full pb-2  over   ">


                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/products" element={<ProductList/>}/>
                        <Route path="/:category" element={<ProductList/>}/>

                        <Route path="*" element={<NotFoundPage/>}/>


                    </Routes>

                 <Signin/>
                    <Signup/>
                </div>

            </div>

        </div>
    );
}

export default CustomerView;