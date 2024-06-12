import {useContext} from "react";
import {CurrentUserContext} from "./Components/CurrentUserProvider.jsx";
import CustomerView from "./Pages/CustomerView.jsx";
import AdminView from "./Pages/AdminView.jsx";

function App() {
const  {session,   adminsession,setadminsession,
    clientsession,setclientsession,CustomerSession,opensignin,handleOpenSignin,setopensignin}=useContext(CurrentUserContext)

    return (
        <>
            {adminsession? <AdminView/>:<CustomerView/>
            }



        </>
    )
}

export default App
