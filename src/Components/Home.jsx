import {Carousel} from "@material-tailwind/react";
import img2 from "../assets/rev-2024-bespoke-ai-n01-kv-pc.webp"
import React from "react";
import tablet from "../assets/ph-galaxy-a8-sm-x205-sm-x205nzafxtc-thumb-530770841.webp"
import phoneimg from "../assets/ph-galaxy-z-fold5-f946-sm-f946blbhphl-thumb-537227633.webp"
import charger from "../assets/ph-travel-adapter-45w-ep-ta845xbegww-frontblack-thumb-186655551.webp"
import  laptop from  "../assets/realme-Book-i3.png"
export default function Home() {
    return (
        <div className="flex flex-col gap-5">

            <Carousel
                className="rounded-xl h-[32rem]"
                navigation={({setActiveIndex, activeIndex, length}) => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                        {new Array(length).fill("").map((_, i) => (
                            <span
                                key={i}
                                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                }`}
                                onClick={() => setActiveIndex(i)}
                            />
                        ))}
                    </div>
                )}
            >
                <img
                    src={img2} alt="image 1"
                    className="h-full w-full object-cover"
                />
                <img
                    src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                    alt="image 2"
                    className="h-full w-full object-cover"
                />
                <img
                    src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                    alt="image 3"
                    className="h-full w-full object-cover"
                />
            </Carousel>


            <div className="w-full gap-5 h-[10rem] flex">
                <div
                    className="w-full p-3 place-items-center justify-center flex text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">

                    <img className=" aspect-square h-24" src={phoneimg}/>

                    <p className=" max-h-[60px] w-full  line-clamp-2   font-sans text-sm  font-normal leading-normal text-gray-700 opacity-75">
                   Phone
                    </p>

                </div>
                <div
                    className="w-full p-1 place-items-center justify-center flex text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">

                    <img className=" aspect-square h-24" src={tablet}/>

                    <p className=" max-h-[60px] w-full  line-clamp-2   font-sans text-sm  font-normal leading-normal text-gray-700 opacity-75">
                   Tablet
                    </p>

                </div>
                <div
                    className="w-full p-1 place-items-center justify-center flex text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">

                    <img className=" h-24 aspect-square" src={charger}/>

                    <p className=" max-h-[60px] w-full  line-clamp-2   font-sans text-sm  font-normal leading-normal text-gray-700 opacity-75">
                        accessories
                    </p>

                </div>
                <div
                    className="w-full p-3 place-items-center justify-center flex text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">

                    <img className=" h-24  aspect-square" src={laptop}/>

                    <p className=" max-h-[60px] w-full  line-clamp-2   font-sans text-sm  font-normal leading-normal text-gray-700 opacity-75">
                        Laptop
                    </p>

                </div>
            </div>
        </div>
    );
}