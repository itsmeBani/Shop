import {Carousel} from "@material-tailwind/react";
import img2 from "../assets/rev-2024-bespoke-ai-n01-kv-pc.webp"
import React from "react";
import tablet from "../assets/ph-galaxy-a8-sm-x205-sm-x205nzafxtc-thumb-530770841.webp"
import phoneimg from "../assets/ph-galaxy-z-fold5-f946-sm-f946blbhphl-thumb-537227633.webp"
import charger from "../assets/ph-travel-adapter-45w-ep-ta845xbegww-frontblack-thumb-186655551.webp"
import  laptop from  "../assets/realme-Book-i3.png"
import  samsanglogo from  "../assets/Studio Shodwe.png"
export default function Home() {
    const copyCode = () => {
        navigator.clipboard.writeText("TECHDEAL20");
        alert("Coupon code copied: TECHDEAL20");
    };
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
                    src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080"
                    alt="image 2"
                    className="h-full w-full object-cover"
                />
                <img
                    src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                    alt="image 3"
                    className="h-full w-full object-cover"
                />
            </Carousel>


            <div className="w-full gap-5 h-[6rem] flex">
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


            <div className="">
                <div className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white text-center py-10 px-20 rounded-lg shadow-md relative">
                    <img src={samsanglogo} className="w-20 mx-auto mb-4 rounded-lg" alt="Promo" />
                    <h3 className="text-1xl font-semibold mb-4">
                        Special Offer at Samsang Tech!
                        Get 20% Flat Off on all items at Samsang Tech. Don't miss out on these incredible savings on phones, laptops, and more!
                        <br />
                        using HDFC Credit Card
                    </h3>
                    <div className="flex items-center space-x-2 mb-6">
          <span id="cpnCode" className="border-dashed border text-white px-4 py-2 rounded-l">
            TECHDEAL20
          </span>
                        <span
                            id="cpnBtn"
                            className="border border-white bg-white text-purple-600 px-4 py-2 rounded-r cursor-pointer"
                            onClick={copyCode}
                        >
            Copy Code
          </span>
                    </div>
                    <p className="text-sm">Valid Till: 20Dec, 2024</p>
                    <div className="w-12 h-12 bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 left-0 -ml-6"></div>
                    <div className="w-12 h-12 bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 right-0 -mr-6"></div>
                </div>
            </div>
        </div>
    );
}