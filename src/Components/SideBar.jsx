import React, {useContext} from "react";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    Accordion,
    AccordionHeader,
    AccordionBody, Drawer,
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
    ShoppingBagIcon, UserIcon
} from "@heroicons/react/24/outline";
import {Link} from "react-router-dom";
import {CurrentUserContext} from "./CurrentUserProvider.jsx";

export function Sidebar() {
    const [open, setOpen] = React.useState(0);
const  {session,opensignin,handleOpenSignin,setopensignin} = useContext(CurrentUserContext)
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };


    return (

    <Card className="h-screen  w-auto  p-4 shadow-xl shadow-blue-gray-900/5">
    <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
            Bani

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
            <Link to="/"> <ListItem>
                <ListItemPrefix>
                    <HomeIcon className="h-5 w-5"/>
                </ListItemPrefix>
                Home
            </ListItem></Link>
            <Link to="/products"> <ListItem>
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

                    <Link to="/phones"> <ListItem>
                        <ListItemPrefix>
                            <ChevronRightIcon strokeWidth={3} className="h-3 w-5"/>
                        </ListItemPrefix>Phones
                    </ListItem></Link>


                    <Link to="/tablets">
                        <ListItem>
                            <ListItemPrefix>
                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5"/>
                            </ListItemPrefix>
                            Tablets
                        </ListItem>
                    </Link>

                    <Link to="/laptops">        <ListItem>
                        <ListItemPrefix>
                            <ChevronRightIcon strokeWidth={3} className="h-3 w-5"/>
                        </ListItemPrefix>
                        Laptops
                    </ListItem></Link>



                    <Link to="/accessories">    <ListItem>
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
            session ?
                <ListItem>

                    <ListItemPrefix>
                        <PowerIcon className="h-5 w-5"/>
                    </ListItemPrefix>
                    Log Out
                </ListItem>:
                <ListItem onClick={handleOpenSignin}>

                    <ListItemPrefix>
                        <UserIcon className="h-5 w-5"/>
                    </ListItemPrefix>
                    Sign in
                </ListItem>

        }

    </List>
</Card>

           );
}