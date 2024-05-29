// components/Card.js
import React from 'react';
import { Button } from "@material-tailwind/react";

function Card({ name, price, description, imageUrl }) {
    return (
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl h-auto w-full">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-56">
                <img
                    src={imageUrl}
                    alt={name}
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="p-6 ">
                <div className="flex items-center justify-between mb-2">
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
                <Button
                    className="w-full"
                    type="button">
                    Add to Cart
                </Button>
            </div>
        </div>
    );
}

export default Card;
