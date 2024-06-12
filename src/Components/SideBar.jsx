import React, {useContext} from "react";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    Accordion,
    AccordionHeader,
    AccordionBody, Drawer, IconButton, Button,
} from "@material-tailwind/react";
import {

    UserCircleIcon,

    PowerIcon,
} from "@heroicons/react/24/solid";
import {
    ChevronRightIcon,
    ChevronDownIcon,
    Squares2X2Icon,
    HomeIcon,
    ShoppingBagIcon, UserIcon, Bars3Icon, Bars3BottomLeftIcon
} from "@heroicons/react/24/outline";
import {Link, NavLink} from "react-router-dom";
import {CurrentUserContext} from "./CurrentUserProvider.jsx";
import {Bars2Icon} from "@heroicons/react/24/outline/index.js";

export function Sidebar() {
    const  SideMenu=()=>{
        return (



            <Card className="h-screen   fixed  w-auto    p-4  sidebarpd  shadow-xl shadow-blue-gray-900/5">
                <div className="mb-2 p-4">
                    <Typography variant="h5" color="blue-gray" className="text-md  font-bolderx` ">
                        SAMSANG TECH

                    </Typography>
                </div>
                <List>
                    <Accordion
                        open={open === 1}

                        icon={

                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
                            />
                        }
                    >
                        <Link to="/" onClick={closeDrawer}>   <ListItem>
                            <ListItemPrefix>
                                <HomeIcon className="h-5 w-5"/>
                            </ListItemPrefix>
                            Home
                        </ListItem></Link>
                        <Link to="/products" onClick={closeDrawer}> <ListItem>
                            <ListItemPrefix>
                                <ShoppingBagIcon className="h-5 w-5"/>
                            </ListItemPrefix>
                            Products
                        </ListItem>

                        </Link>
                        <ListItem className="p-0" selected={open === 1}>
                            <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                                <ListItemPrefix>
                                    <Squares2X2Icon className="h-5 w-5"/>
                                </ListItemPrefix>
                                <Typography color="blue-gray" className="mr-auto font-normal">
                                    Categories
                                </Typography>
                            </AccordionHeader>
                        </ListItem>
                        <AccordionBody className="py-1">
                            <List className="p-0">

                                <Link to="/phones" onClick={closeDrawer}>   <ListItem>
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5"/>
                                    </ListItemPrefix>Phones
                                </ListItem></Link>


                                <Link to="/tablets" onClick={closeDrawer}>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <ChevronRightIcon strokeWidth={3} className="h-3 w-5"/>
                                        </ListItemPrefix>
                                        Tablets
                                    </ListItem>
                                </Link>

                                <Link to="/laptops" onClick={closeDrawer}>         <ListItem>
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5"/>
                                    </ListItemPrefix>
                                    Laptops
                                </ListItem></Link>



                                <Link to="/accessories" onClick={closeDrawer}>    <ListItem>
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5"/>
                                    </ListItemPrefix>
                                    Accessories
                                </ListItem></Link>


                            </List>
                        </AccordionBody>
                    </Accordion>


                    <ListItem>
                        <ListItemPrefix>
                            <UserCircleIcon className="h-5 w-5"/>
                        </ListItemPrefix>
                        Profile
                    </ListItem>
                    {
                        clientsession ?
                            <ListItem onClick={HandleLogout}>

                                <ListItemPrefix>
                                    <PowerIcon className="h-5 w-5"/>
                                </ListItemPrefix>
                                Log Out
                            </ListItem>:
                            <p   onClick={handleOpenSignin}>

                                <ListItem >

                                    <ListItemPrefix>
                                        <UserIcon className="h-5 w-5"/>
                                    </ListItemPrefix>
                                    Sign in
                                </ListItem>
                            </p>

                    }

                </List>
            </Card>
        )

    }
    const [open, setOpen] = React.useState(0);
const  {session,opensignin,handleOpenSignin,setopensignin,clientsession,setClientToken} = useContext(CurrentUserContext)
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    const  HandleLogout=()=>{
        setClientToken(null)
    }


    const [OpenDrawer, setOpenDrawer] = React.useState(false);

    const openDrawer = () => setOpenDrawer(true);
    const closeDrawer = () => setOpenDrawer(false);


    return (
<div className="w-[20rem] sidebarcon">
    <div className="p-4 py-4 hidden sidebarbtn ">
        <IconButton className="absolute z-[1]" onClick={openDrawer}><Bars3BottomLeftIcon className="h-5 w-5"/></IconButton>
    </div>
<div className="lgsidebar">
    <SideMenu/>
</div>




    <Drawer open={OpenDrawer} onClose={closeDrawer} className="bg-white ">

        <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        </IconButton>
        <SideMenu/>

    </Drawer>





    </div>

           );
}


