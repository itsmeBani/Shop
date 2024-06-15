import React, {useEffect, useState} from 'react';
import {Button, Dialog, DialogBody, DialogFooter, Input} from "@material-tailwind/react";
import {CalendarIcon, MapPinIcon, XMarkIcon} from "@heroicons/react/24/outline/index.js";
import {AtSymbolIcon, UserIcon} from "@heroicons/react/24/outline";
import {createUser, UpdateUser} from "../AxiosAdmin.js";
import SuccessAlert from "./SuccessAlert.jsx";

function ViewCustomer({HandleViewCustomer,
                          isEdit,
                          VieCustomer,
                          setrefresh,
    refresh,
                          selectedCustomer}) {





    const [formData, setFormData] = useState({
        user_id: selectedCustomer?.user_id|| '',
        username: selectedCustomer?.username || '',
        firstname: selectedCustomer?.firstname || '',
        lastname: selectedCustomer?.lastname || '',
        address: selectedCustomer?.address || '',
        created_at: selectedCustomer?.created_at || ''
    });

    // Use useEffect to update formData if selectedCustomer changes
    useEffect(() => {
        if (selectedCustomer) {
            setFormData({
                user_id: selectedCustomer.user_id|| '',
                username: selectedCustomer.username || '',
                firstname: selectedCustomer.firstname || '',
                lastname: selectedCustomer.lastname || '',
                address: selectedCustomer.address || '',
                created_at: selectedCustomer.created_at || ''
            });
        }
    }, [selectedCustomer]);










    const [Success, setSuccess] = useState(false);



    const  UpdateCustomer = async ()=> {

        console.log(formData)
try {

        const response = await UpdateUser(
            formData.user_id,
            formData.username,
            formData.firstname,
            formData.lastname,
            formData.address,
            formData.created_at
        );


        setFormData({

            username: '',
            password: '',
            firstname: '',
            lastname: '',
            address: '',
            created_at:''

        })

        setSuccess(true);

    setrefresh(!refresh)
    HandleViewCustomer()
        const interval = setTimeout(() => {
            setSuccess(false)
        }, 2000)


        return () => clearTimeout(interval);
    } catch (error) {
        setSuccess('Error updating Customer account');
    }
}









    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <>
            {Success &&      <SuccessAlert txt={"Customer Updated"}/>}
            {  !isEdit ?  <Dialog open={VieCustomer} handler={HandleViewCustomer} size="sm" className="">

                <DialogBody className="p-0">
                    <div className=" py-8">
                        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex flex-col md:flex-col -mx-4">
                                <div className="md:flex-1 px-4">

                                </div>
                                <div className="md:flex-1 px-4">
                                    <div className="flex justify-between">

                                        <p className="text-lg flex gap-1 place-items-center  font-bold  dark:text-white text-blue-500 mb-2"> <AtSymbolIcon className="w-6 h-10 text-blue-500  font-bold" />{selectedCustomer?.username}</p>



                                    </div>

                                    <div className="flex mb-4 place-items-center gap-2">

                                        <UserIcon className="w-6 h-6 font-bold" />
                                        <div className="mr-4">
                                            <h2 className="font-bold text-gray-700 dark:text-gray-300"><span className="text-md text-normal">First Name:    </span> <span className="font-normal">   {selectedCustomer?.firstname} </span></h2>

                                            <h2 className="font-bold text-gray-700 dark:text-gray-300 "><span className="text-md text-normal">Last Name:    </span> <span className="font-normal">  {selectedCustomer?.lastname} </span></h2>
                                        </div>

                                    </div>

                                    <div className="mb-4">
                                        <span className="font-bold text-gray-700 dark:text-gray-300">Address:</span>


                                        <div className="flex">

                                            <MapPinIcon className="w-6 h-6 font-bold"/>
                                            <p className="text-lg  text-gray-800 dark:text-white ">{selectedCustomer?.address}</p>

                                        </div>
                                    </div>
                                    <div>

                                        <p className=" font-bold text-gray-700 dark:text-gray-300">Join at:</p>
                                        <div className="flex gap-2">

                                            <CalendarIcon className="w-6 h-6 font-bold"/>
                                            <p className="text-sm   text-gray-800  dark:text-white text-blue-500 mb-2"> {selectedCustomer?.created_at}</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button

                        color="red"
                        onClick={HandleViewCustomer}
                        className=" absolute top-0 p-2 right-0"
                    >
                        <XMarkIcon  className="w-7 h-7  text-blue-gray-700  "/>

                    </button>

                </DialogBody>
                <DialogFooter>

                    <Button variant="gradient" color="red" onClick={HandleViewCustomer}>
                        <span>Close</span>
                    </Button>
                </DialogFooter>
            </Dialog> :



                <Dialog open={VieCustomer} handler={HandleViewCustomer} size="sm" className="">
                    <DialogBody className="p-0">
                        <div className="py-8">
                            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="flex flex-col md:flex-col -mx-4">
                                    <div className="md:flex-1 px-4"></div>
                                    <div className="md:flex-1 px-4">
                                        <div className=" gap-2 flex mb-5 ">
                                            <AtSymbolIcon className="w-6 h-10 text-blue-500  font-bold" />
                                               <div className="w-10">
                                                   <Input
                                                       label={"username"}
                                                       type="text"
                                                       name="username"
                                                       value={formData?.username}
                                                       onChange={handleChange}
                                                       className="text-lg w-full font-bold dark:text-white text-blue-500 mb-2"
                                                   />

                                               </div>
                                        </div>
                                        <div className="flex mb-4 place-items-center gap-2">
                                            <UserIcon className="w-6 h-10 font-bold" />
                                            <div className="mr-4 flex flex-col gap-1">
                                                <h2 className="font-bold text-gray-700 flex   place-items-center  gap-2 dark:text-gray-300">
                                                    <span className="text-md text-normal w-full place-items-center">First Name: </span>
                                                    <Input
                                                        label={"firstname"}
                                                        type="text"
                                                        name="firstname"
                                                        value={formData?.firstname}
                                                        onChange={handleChange}
                                                        className="font-normal"
                                                    />
                                                </h2>
                                                <h2 className="font-bold text-gray-700 flex     gap-2  dark:text-gray-300">
                                                    <span className="text-md text-normal w-full">Last Name: </span>
                                                    <Input
                                                        label={"lastname"}
                                                        type="text"
                                                        name="lastname"
                                                        value={formData?.lastname}
                                                        onChange={handleChange}
                                                        className="font-normal"
                                                    />
                                                </h2>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <span className="font-bold text-gray-700 dark:text-gray-300">Address:</span>
                                            <div className="flex">
                                                <MapPinIcon className="w-6 h-6 font-bold" />
                                                <Input
                                                    label={"address"}
                                                    name="address"
                                                    value={formData?.address}
                                                    onChange={handleChange}
                                                    className="text-lg text-gray-800 dark:text-white"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-700 dark:text-gray-300">Join at:</p>
                                            <div className="flex gap-2">
                                                <CalendarIcon className="w-6 h-6 font-bold" />
                                                <Input
                                                    label={"created_at"}
                                                    name="created_at"
                                                    type={"datetime-local"}
                                                    value={formData?.created_at}
                                                    onChange={handleChange}
                                                    className="text-sm text-gray-800 dark:text-white text-blue-500 mb-2"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            color="red"
                            onClick={HandleViewCustomer}
                            className="absolute top-0 p-2 right-0"
                        >
                            <XMarkIcon className="w-7 h-7 text-blue-gray-700" />
                        </button>
                    </DialogBody>
                    <DialogFooter className="flex gap-3">
                        <Button variant="gradient" color="red" onClick={HandleViewCustomer}>
                            <span>Close</span>
                        </Button>
                        <Button variant="gradient" color="green" onClick={UpdateCustomer}>
                            <span>Save</span>
                        </Button>
                    </DialogFooter>
                </Dialog>

            }
        </>
    );
}

export default ViewCustomer;