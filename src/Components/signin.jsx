import React, {useContext} from 'react';
import {Button, Card, CardBody, CardFooter, Checkbox, Dialog, Input, Typography} from "@material-tailwind/react";

import {CurrentUserContext} from "./CurrentUserProvider.jsx";

function Signin(props) {
    const  {session,opensignin,handleOpenSignin,setopensignin} = useContext(CurrentUserContext)

    return (
       <>
           <Dialog
               size="xs"
               open={opensignin}
               handler={handleOpenSignin}
               className="bg-transparent flex shadow-none"
           >
               <Card className="w-[30rem]">
                   <CardBody className="flex flex-col gap-4">
                       <Typography variant="h4" color="blue-gray">
                           Sign In
                       </Typography>
                       <Typography
                           className="mb-3 font-normal"
                           variant="paragraph"
                           color="gray"
                       >
                           Enter your email and password to Sign In.
                       </Typography>
                       <Typography className="-mb-2" variant="h6">
                           Your Email
                       </Typography>
                       <Input label="Email" size="lg" />
                       <Typography className="-mb-2" variant="h6">
                           Your Password
                       </Typography>
                       <Input label="Password" size="lg" />

                   </CardBody>
                   <CardFooter className="pt-0">
                       <Button variant="gradient"  fullWidth>
                           Sign In
                       </Button>
                       <Typography variant="small" className="mt-4 flex justify-center">
                           Don&apos;t have an account?
                           <Typography
                               as="a"
                               href="#signup"
                               variant="small"
                               color="blue-gray"
                               className="ml-1 font-bold"
                               onClick={handleOpenSignin}
                           >
                               Sign up
                           </Typography>
                       </Typography>
                   </CardFooter>
               </Card>
           </Dialog>
       </>
    );
}

export default Signin;