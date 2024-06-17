import {Carousel, ListItem, ListItemPrefix} from "@material-tailwind/react";
import img2 from "../assets/rev-2024-bespoke-ai-n01-kv-pc.webp"
import React, {useContext} from "react";
import tablet from "../assets/ph-galaxy-a8-sm-x205-sm-x205nzafxtc-thumb-530770841.webp"
import phoneimg from "../assets/ph-galaxy-z-fold5-f946-sm-f946blbhphl-thumb-537227633.webp"
import charger from "../assets/ph-travel-adapter-45w-ep-ta845xbegww-frontblack-thumb-186655551.webp"
import  laptop from  "../assets/realme-Book-i3.png"
import  samsanglogo from  "../assets/Studio Shodwe.png"
import {Link} from "react-router-dom";
import {CurrentUserContext} from "./CurrentUserProvider.jsx";
import {PowerIcon} from "@heroicons/react/24/solid/index.js";
import {UserIcon} from "@heroicons/react/24/outline/index.js";
export default function Home() {
    const  {session,opensignin,handleOpenSignin,setopensignin,handleOpenSignup,clientsession,setClientToken} = useContext(CurrentUserContext)

    const copyCode = () => {
        navigator.clipboard.writeText("TECHDEAL20");
        alert("Coupon code copied: TECHDEAL20");
    };
    return (
        <div className="flex flex-col gap-3 pt-30">

            <Carousel
                className="rounded-xl h-[12rem]  md:h-[28rem]"
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

                <div className="w-full  h-full rounded-md overflow-hidden bg-cover bg-center  cardbgmain">
                    <div className="bg-gray-900 bg-opacity-50 flex items-center  h-full">
                        <div className="px-20 max-w-xl">
                            <h2 className="text-2xl  text-white font-semibold introtext">Welcome to SamSang Tech</h2>
                            <p className="mt-1 text-gray-200 introtext">Explore the latest gadgets that enhance your daily life with innovative features and designs.</p>
                            <button className="flex btnr mt-3 bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded focus:outline-none">        <Link to={"/products"}>Shop Now</Link>

                            </button>
                        </div>
                    </div>
                </div>
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


            <div className="w-full gap-1  md:gap-5 h-auto md:text-start  text-center    md:h-[6rem]  flex flex-row  md:flex-row ">

                <Link to="/phones"
                    className="w-full p-3 place-items-center justify-center flex text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">

                    <img className=" aspect-square hidden md:block  h-24" src={phoneimg}/>

                    <p className=" max-h-[60px] w-full  line-clamp-2   font-sans text-sm  font-normal leading-normal text-gray-700 opacity-75">
                   Phone
                    </p>

                </Link>

                <Link to="/tablets"
                    className="w-full p-1 place-items-center justify-center flex text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">

                    <img className=" aspect-square hidden md:block  h-24" src={tablet}/>

                    <p className=" max-h-[60px] w-full  line-clamp-2   font-sans text-sm  font-normal leading-normal text-gray-700 opacity-75">
                   Tablet
                    </p>

                </Link>
                <Link to="/accessories"
                    className="w-full p-1 place-items-center justify-center flex text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">

                    <img className=" h-24 hidden md:block  aspect-square" src={charger}/>

                    <p className=" max-h-[60px] w-full  line-clamp-2   font-sans text-sm  font-normal leading-normal text-gray-700 opacity-75">
                        accessories
                    </p>
                </Link>
                <Link to="/laptops"
                    className="w-full p-3 place-items-center justify-center flex text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">

                    <img className=" h-24  hidden md:block aspect-square" src={laptop}/>

                    <p className=" max-h-[60px] w-full  line-clamp-2   font-sans text-sm  font-normal leading-normal text-gray-700 opacity-75">
                        Laptop
                    </p>

                </Link>
            </div>





            <div className="flex flex-col  md:flex-row w-full  gap-2">
                <div className="flex flex-col md:flex-row w-full gap-2">
                <div className="w-full h-64 rounded-md overflow-hidden bg-cover bg-center cardbg">
                    <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                        <div className="px-10 max-w-xl">
                            <h2 className="text-1xl text-white font-semibold">Discover New Gadgets</h2>
                            <p className="mt-2 text-gray-200 introtext text-sm md:text:md">
                                Dive into the world of cutting-edge technology. Uncover the latest gadgets designed to make your life smarter and more convenient.
                            </p>
                            <button onClick={handleOpenSignup} className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                                <Link to="/products">Register Now</Link>
                                <svg
                                    className="h-5 w-5 mx-2"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

                <div className="w-full h-64  rounded-md overflow-hidden bg-cover bg-center md:w-1/2 cardbg2">

                        <div className="flex items-center h-full">
                            <div className="px-6 py-4">
                                <h2 className="text-1xl font-semibold text-white mb-2">Smart Gadgets</h2>
                                <p className="text-gray-300 text-sm">Discover smart gadgets that make your life easier and more connected.</p>
                                {
                                    clientsession ?  <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded focus:outline-none" >
                                            Hello

                                        </button>
                                        :
                                        <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded focus:outline-none" onClick={handleOpenSignin}>
                                            Join Now
                                            <svg className="h-4 w-4 inline-block ml-2 -mt-px" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                            </svg>
                                        </button>


                                }
                            </div>
                        </div>
                    </div>

                </div>
            <div className="w-full">
                <div className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white  text-center   md:py-10 md:px-20  py-4 px-4 rounded-lg shadow-md relative">
                    <img src={samsanglogo} className="md:w-20   w-10 mx-auto mb-4 rounded-lg" alt="Promo" />
                    <h3 className=" text-balance   text-[10px]  md:text-1xl font-semibold mb-4">
                        Special Offer at Samsang Tech!
                        Get 20% Flat Off on all items
                        at Samsang Tech. Don't miss out
                        these incredible savings on phones, laptops, and more!
                        <br />
                        using HDFC Credit Card
                    </h3>
                    <div className="flex items-center space-x-2 mb-2 md:mb-6">
          <span id="cpnCode" className="border-dashed  text-[10px] border text-white px-4 py-2 rounded-l">
            TECHDEAL20
          </span>
                        <span
                            id="cpnBtn"
                            className="border border-white bg-white  text-[10px] text-purple-600 px-4 py-2 rounded-r cursor-pointer"
                            onClick={copyCode}
                        >
            Copy Code
          </span>
                    </div>
                    <p className="  text-[8px]">Valid Till: 20Dec, 2024</p>
                    <div className="w-12 h-12 bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 left-0 -ml-6"></div>
                    <div className="w-12 h-12 bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 right-0 -mr-6"></div>
                </div>
            </div>

            </div>


    );
}