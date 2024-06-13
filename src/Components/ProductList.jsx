// ProductList.js

import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from './Card';
import { MagnifyingGlassIcon, ShoppingCartIcon } from "@heroicons/react/24/outline/index.js";
import { Badge, Button } from "@material-tailwind/react";
import Cart from "./Cart.jsx";
import { getALLProduct } from "../AxiosAdmin.js";
import { CurrentUserContext } from "./CurrentUserProvider.jsx";

const ProductList = () => {
    const [Alert, setAlert] = useState(false);

    const { clientsession, setclientsession, cartLength } = useContext(CurrentUserContext);
    const [fetchproducts, setproducts] = useState([]);
    const [refresh, setrefresh] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [cart, setcart] = useState(false);

    useEffect(() => {
        const fetchALLproduct = async () => {
            try {
                const response = await getALLProduct();
                setproducts(response.data);
            } catch (error) {
                console.error('Error fetching products', error);
            }
        };

        fetchALLproduct();
    }, [refresh]);

    const { category } = useParams();
    const filteredProducts = fetchproducts.filter(product => {
        const matchesCategory = category ? product.label.toLowerCase() === category.toLowerCase() : true;
        const matchesSearchQuery = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || product.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearchQuery;
    });

    return (
        <div className="w-full over">
            <div className="flex gap-2 w-full place-items-center justify-end p-2">
                <div className="w-52">
                    <div className="relative w-full min-w-[200px] h-10">
                        <div className="absolute grid w-5 h-5 place-items-center bg-none top-2/4 right-3 -translate-y-2/4">
                            <MagnifyingGlassIcon className="h-4 font-bold w-4" />
                        </div>
                        <input
                            className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] !pr-9 border-blue-gray-200 focus:border-gray-900"
                            placeholder=" "
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                            Search
                        </label>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Badge content={cartLength} invisible={clientsession == null || cartLength == null}>
                        <Button className="rounded-lg px-3" onClick={() => setcart(true)}>
                            <ShoppingCartIcon className="h-4 w-4" />
                        </Button>
                    </Badge>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-1 md:gap-4 py-2 overflow-y-scroll pb-[10rem]">
                {filteredProducts.map((product) => (
                    <div className="h-full" key={product.id}>
                        <Card key={product.id} {...product} />
                    </div>
                ))}
            </div>
            {cart && clientsession ? <Cart setcart={setcart} /> : ""}
        </div>
    );
};

export default ProductList;
