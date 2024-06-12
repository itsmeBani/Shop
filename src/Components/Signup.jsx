import React, {useContext, useState} from 'react';
import {Button, Card, CardBody, CardFooter, Dialog, Input, Typography} from "@material-tailwind/react";
import {Link} from "react-router-dom";
import {CurrentUserContext} from "./CurrentUserProvider.jsx";
import {createUser} from "../AxiosAdmin.js";
import SuccessAlert from "./SuccessAlert.jsx";

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
    return (
        <>
            {Success && <SuccessAlert txt={Success}/>}

            <Dialog
                size="sm"
                open={opensignup}
                handler={handleOpenSignup}
                className="bg-transparent justify-center flex shadow-none"
            >

                <form onSubmit={handleRegister}>
                    <Card className="w-[30rem] ">
                        <CardBody className="flex flex-col gap-4">
                            <Typography variant="h4" color="blue-gray">
                                Sign up
                            </Typography>
                            <Typography
                                className="mb-3 font-normal"
                                variant="paragraph"
                                color="gray"
                            >
                                Enter your Details To Register
                            </Typography>


                            <Typography className="-mb-2" variant="h6">
                                User name
                            </Typography>
                            <Input onChange={handleChange} value={formData.username} name="username" label="User name"
                                   size="lg"/>
                            <Typography className="-mb-2" variant="h6">
                                First name
                            </Typography>
                            <Input onChange={handleChange} value={formData.firstname} name="firstname"
                                   label="  First name" size="lg"/>
                            <Typography className="-mb-2" variant="h6">
                                Last name
                            </Typography>
                            <Input onChange={handleChange} value={formData.lastname} name="lastname" label="Last name"
                                   size="lg"/> <Typography className="-mb-2" variant="h6">
                            Address
                        </Typography>
                            <Input onChange={handleChange} value={formData.address} name="address" label="Address"
                                   size="lg"/> <Typography className="-mb-2" variant="h6">
                            Password
                        </Typography>
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
                    </Card>
                </form>
            </Dialog>
        </>
    );
}

export default Signup;