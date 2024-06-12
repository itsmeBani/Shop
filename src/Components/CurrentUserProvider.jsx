import React, {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";

export const CurrentUserContext = createContext({});
import {getCurrentUser, ViewCart} from "../AxiosAdmin"

export const CurrenUserProvider = ({children}) => {

    const session = ""


const [cartLength,setcartLength]=useState(0)
    const [opensignin, setopensignin] = React.useState(false);
    const [opensignup, setopensignup] = React.useState(false);
    const handleOpenSignin = () => setopensignin((cur) => !cur);
    const [adminsession, setadminsession] = React.useState(localStorage.getItem('ADMIN_TOKEN'));
    const [clientsession, setclientsession] = React.useState(localStorage.getItem('CLIENT_TOKEN'));
    const [refreshcart,setRefreshCart]=useState(false)
    const [currentUser, setCurrentUser] = useState(null);
    const [viewcart,setViewCart]=useState([])
    const setAdminToken = (token) => {
        setadminsession(token)
        if(token){
            localStorage.setItem('ADMIN_TOKEN',JSON.stringify(token));
        }
        else{
            localStorage.removeItem('ADMIN_TOKEN');
        }
    }

    const setClientToken = (token) => {
        setclientsession(token)
        if(token){
            localStorage.setItem('CLIENT_TOKEN',JSON.stringify(token));

        }
        else{
            localStorage.removeItem('CLIENT_TOKEN');
        }
    }

    useEffect(() => {
        // Fetch the current user on mount
        const fetchCurrentUser = async () => {
            try {
                const response = await getCurrentUser()
                console.log(response)
                if (response.data.status === 'success') {
                    setCurrentUser(response.data.user);

                    console.log(currentUser)
                }
            } catch (error) {
                console.error('Error fetching current user', error);
            }
        };

        fetchCurrentUser();
    }, [currentUser]);





    useEffect(() => {
        // Fetch the current user on mount
        const VIewUserCart = async (e) => {
            try {
                const response = await ViewCart(e)
                console.log(response.data.cart_items)

                setcartLength(response?.data?.cart_items?.length)
                setViewCart(response.data.cart_items)

            } catch (error) {
                console.error('Error fetching current user', error);
            }
        };

        VIewUserCart(clientsession);
    }, [refreshcart,clientsession]);











    const handleOpenSignup = () => setopensignup((cur) => !cur);
    return (
        <CurrentUserContext.Provider value={{
            session,
            viewcart,setViewCart,
            setCurrentUser,
            setopensignup,
            opensignin,
            setAdminToken,
            setClientToken,
            cartLength,setcartLength,
            adminsession,setadminsession,
            clientsession,setclientsession,
            opensignup,
            refreshcart,setRefreshCart,
            handleOpenSignup,
            handleOpenSignin,
            setopensignin
        }}>
            {children}
        </CurrentUserContext.Provider>
    )
}