import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, CardBody, CardFooter, Dialog, Input, Typography} from "@material-tailwind/react";
import {Link} from "react-router-dom";
import {CurrentUserContext} from "./CurrentUserProvider.jsx";
import {createUser} from "../AxiosAdmin.js";
import SuccessAlert from "./SuccessAlert.jsx";
import {XMarkIcon} from "@heroicons/react/24/outline/index.js";

function Signup(props) {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        firstname: '',
        lastname: '',
        address: ''
    });
    const [Success, setSuccess] = useState('');
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        console.log(formData)
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await createUser(
                formData.username,
                formData.password,
                formData.firstname,
                formData.lastname,
                formData.address
            );

            console.log(response.data.message)
            setFormData({

                username: '',
                password: '',
                firstname: '',
                lastname: '',
                address: ''

            })

            setSuccess(response.data.message);


            const interval = setTimeout(() => {
                setSuccess("")
            }, 2000)


            return () => clearTimeout(interval);
        } catch (error) {
            setSuccess('Error creating user account');
        }
    };
    const {setopensignup, opensignin, opensignup, handleOpenSignup, handleOpenSignin} = useContext(CurrentUserContext)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    // Function to update screenWidth state on window resize
    const updateScreenWidth = () => {
        setScreenWidth(window.innerWidth);
    };

    // Effect to add event listener for window resize
    useEffect(() => {
        window.addEventListener('resize', updateScreenWidth);
        return () => {
            window.removeEventListener('resize', updateScreenWidth);
        };
    }, []); // Empty dependency array means this effect runs only once

    // Determine size based on screen width
    const size = screenWidth <= 500 ? 'xl' : 'sm';






    return (
        <>
            {Success && <SuccessAlert txt={Success}/>}


            <Dialog
                size={size}
                open={opensignup}
                handler={handleOpenSignup}
                className="bg-transparent flex h-full z-[222222]   md:h-auto     md:pb-[0rem]   md:pt-0   pb-[4rem] w-full shadow-none"

            >



                    <Card className=" w-full h-full md:w-[30rem]  ">
                        <button
                            color="red"
                            onClick={handleOpenSignup}
                            className="absolute top-0  p-2   z-[222222]  right-0"
                        >
                            <XMarkIcon className="w-7 h-7  text-blue-gray-700" />
                        </button>

                        <form onSubmit={handleRegister} className="w-full relative ">

                        <CardBody className="flex flex-col  gap-2 md:gap-4">
                            <Typography variant="h4" color="blue-gray">
                                Sign up
                            </Typography>
                            <Typography
                                className="mb-1 font-normal"
                                variant="paragraph"
                                color="gray"
                            >
                                Enter your Details To Register
                            </Typography>



                            <Input onChange={handleChange} value={formData.username} name="username" label="User name"
                                   size="lg"/>

                            <Input onChange={handleChange} value={formData.firstname} name="firstname"
                                   label="  First name" size="lg"/>

                            <Input onChange={handleChange} value={formData.lastname} name="lastname" label="Last name"
                                   size="lg"/>
                            <Input onChange={handleChange} value={formData.address} name="address" label="Address"
                                   size="lg"/>
                            <Input onChange={handleChange} value={formData.password} name="password" label="Password"
                                   size="lg"/>
                        </CardBody>


                        <CardFooter className="pt-0">
                            <Button variant="gradient" fullWidth type={"submit"}>
                                Sign In
                            </Button>
                            <Typography variant="small" className="mt-4 flex justify-center">
                                Already have an account?
                                <p
                                      onClick={handleOpenSignup}

                                      color="blue-gray"
                                      className="ml-1 font-bold"

                                >
                                    Sign in
                                </p>
                            </Typography>
                        </CardFooter>
                        </form>
                    </Card>

            </Dialog>
        </>
    );
}

export default Signup;