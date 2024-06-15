import React, {useContext} from 'react';
import Table from "../Components/Table.jsx";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip, Tooltip, IconButton,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import {CurrentUserContext} from "../Components/CurrentUserProvider.jsx";
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import Home from "../Components/Home.jsx";
import ProductList from "../Components/ProductList.jsx";
import NotFoundPage from "../Components/NotFoundPage.jsx";
import ManageProfile from "../Components/ManageProfile.jsx";

function AdminView(props) {

    const {setAdminToken} = useContext(CurrentUserContext);

    const navigate = useNavigate();
    const HandleLogoutAdmin = () => {
        navigate("/")
        setAdminToken(null);
    };

    return (
        <div className="flex overflow-hidden">
            <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
                <div className="mb-2 p-4">
                    <Typography variant="h5" color="blue-gray">
                 ADMIN
                    </Typography>
                </div>
                <List>
                    <Link to={"/"}
                    >


                        <ListItem>
                            <ListItemPrefix>
                                <PresentationChartBarIcon className="h-5 w-5"/>
                            </ListItemPrefix>
                            Dashboard
                        </ListItem>
                    </Link>


                    <Link to={"/manageuser"}>

                        <ListItem>
                            <ListItemPrefix>
                                <UserCircleIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Customer
                        </ListItem>


                      </Link>

                    <ListItem onClick={HandleLogoutAdmin}>


                        <ListItemPrefix>
                            <PowerIcon className="h-5 w-5"/>


                        </ListItemPrefix>

                        Log Out

                    </ListItem>
                </List>
            </Card>


            <Routes>
                <Route path="/" element={<Table/>}/>
                <Route path="/manageuser" element={<ManageProfile/>}/>

            </Routes>


        </div>
    );
}

export default AdminView;