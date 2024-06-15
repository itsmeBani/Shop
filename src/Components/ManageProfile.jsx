import React, {useEffect, useState} from 'react';
import {Button, IconButton, Tooltip} from "@material-tailwind/react";
import {ArrowLeftIcon, EyeIcon, PencilIcon, PlusIcon, TrashIcon} from "@heroicons/react/24/outline/index.js";
import {ArrowRightIcon} from "@heroicons/react/24/solid/index.js";
import {getALLCustomer, getALLProduct} from "../AxiosAdmin.js";
import {ViewAdminProduct} from "./ViewAdminProduct.jsx";
import ViewCustomer from "./ViewCustomer.jsx";
import {useNavigate} from "react-router-dom";

function ManageProfile(props) {

    const [fetchCustomer, setfetchCustomer] = useState([]);
    const [refresh, setrefresh] = useState(false);

const  [isEditable, setisEditable] = useState(false)
    useEffect(() => {
        const fetchALLCustomer = async () => {
            try {
                const response = await getALLCustomer();
                setfetchCustomer(response.data);
            } catch (error) {
                console.error('Error fetching products', error);
            }
        };


        fetchALLCustomer();
    }, [refresh]);

    const [selectedCustomer, setSelectedCustomer] = useState({});

    const [VieCustomer, setVieCustomer] = useState(false);
    const HandleViewCustomer = (customer) => {

        setSelectedCustomer(customer);
        setVieCustomer(!VieCustomer);
    };







    return (
     <>



         <div className="flex flex-wrap -mx-3 mb-5 w-full">
             <div className="w-full max-w-full px-3 mb-6 mx-auto">
                 <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
                     <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
                         <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
                             <h3 className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
                                 <span className="mr-3 font-semibold text-dark">Manage Customer</span>
                                 <span className="mt-1 font-medium text-secondary-dark text-lg/normal">All Customer from the Samsang Tech</span>
                             </h3>

                         </div>

                         <div className="flex-auto block w-full py-8 pt-6 px-9">
                             <div className="overflow-x-auto">
                                 <table className="w-full h-full my-0 align-middle text-dark border-neutral-200">
                                     <thead className="align-bottom">
                                     <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                                         <th className="pb-3 text-start min-w-[175px] font-sans text-l font-bold leading-none text-blue-gray-900 antialiased opacity-70">Name</th>
                                         <th className="pb-3 text-start min-w-[100px] font-sans text-l font-bold leading-none text-blue-gray-900 antialiased opacity-70">Address</th>
                                         <th className="pb-3 text-start min-w-[100px] font-sans text-l font-bold leading-none text-blue-gray-900 antialiased opacity-70">Join At </th>
                                         <th className="pb-3 text-start min-w-[100px] font-sans text-l font-bold leading-none text-blue-gray-900 antialiased opacity-70">User Name </th>

                                         <th className="pb-3 text-end min-w-[50px] font-sans text-l font-bold leading-none text-blue-gray-900 antialiased opacity-70">Action</th>
                                     </tr>
                                     </thead>
                                     <tbody>
                                     {fetchCustomer?.map((customer)=>{

                                         return (


                                             <tr className="border-b border-dashed last:border-b-0" key={customer.user_id}>
                                                 <td className="p-3 pl-0">
                                                     <div className="flex items-center">

                                                         <div className="flex flex-col justify-start">
                                                             <p className="mb-1 font-normal transition-colors duration-200 ease-in-out text-md/normal opacity-80 text-secondary-inverse hover:text-primary">{customer?.firstname + "" + customer?.lastname}</p>
                                                         </div>
                                                     </div>
                                                 </td>
                                                 <td className="p-3 pr-0 text-start">
                                                     <span className="font-normal text-light-inverse text-md/normal">{customer?.address.slice(0,20)}</span>
                                                 </td>
                                                 <td className="py-3 pr-0 text-start">
                                                     <span className="text-start align-baseline inline-flex  py-3 mr-auto font-normal text-[.95rem] leading-none text-primary rounded-lg">{customer?.created_at.toLocaleString()}</span>

                                                 </td>
                                                 <td className="p-3 pr-0 ">
                                                     <span className="text-center align-baseline inline-flex  py-3 mr-auto items-center font-normal text-[.95rem] leading-none text-primary rounded-lg">{customer?.username}</span>
                                                 </td>
                                                 <td className="pr-0 text-center w-full  h-full p-3 flex place-items-center justify-center w-full gap-1">
                                                     <Tooltip
                                                         content="Edit"
                                                         animate={{
                                                             mount: { scale: 1, y: 0 },
                                                             unmount: { scale: 0, y: 25 },
                                                         }}
                                                         className="bg-blue-500"
                                                     >
                                                         <IconButton

                                                             onClick={() =>{

                                                                 setisEditable(true)
                                                                 HandleViewCustomer(customer)

                                                         }
                                                             }
                                                             className="bg-blue-500/90">
                                                             <PencilIcon className="h-5 w-5" />
                                                         </IconButton>
                                                     </Tooltip>



                                                     <Tooltip
                                                         content="View"
                                                         animate={{
                                                             mount: { scale: 1, y: 0 },
                                                             unmount: { scale: 0, y: 25 },
                                                         }}
                                                         className="bg-[#212121]"
                                                     >
                                                         <IconButton


                                                             onClick={() =>{
                                                                 setisEditable(false)

                                                                 HandleViewCustomer(customer)}}

                                                         >
                                                             <EyeIcon className="h-5 w-5" />
                                                         </IconButton>
                                                     </Tooltip>
                                                 </td>
                                             </tr>

                                         )


                                     })}
                                     </tbody>
                                 </table>
                             </div>
                         </div>
                         <div className="flex place-items-center justify-end p-2 w-full gap-4">
                             <Button
                                 variant="text"
                                 className="flex items-center gap-2"
                                 //     disabled={currentPage === 1}
                                 //     onClick={() => paginate(currentPage - 1)}
                             >
                                 <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
                             </Button>
                             <div className="flex items-center gap-2">
                                 {/*    Page <strong className="text-gray-900">{currentPage}</strong> of{" "}*/}
                                 {/*    <strong className="text-gray-900">{Math.ceil(products.length / itemsPerPage)}</strong>*/}
                             </div>
                             <Button
                                 variant="text"
                                 // disabled={indexOfLastItem >= products.length}
                                 // onClick={() => paginate(currentPage + 1)}
                                 className="flex items-center gap-2"
                             >
                                 Next <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
                             </Button>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
       <ViewCustomer HandleViewCustomer={HandleViewCustomer}  VieCustomer={VieCustomer}  selectedCustomer={selectedCustomer} setrefresh={setrefresh} refresh={refresh}  isEdit={isEditable}/>




     </>
);
}

export default ManageProfile;