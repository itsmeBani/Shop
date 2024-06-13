import React, { useContext, useEffect, useState } from 'react';
import { Button, IconButton, Tooltip } from "@material-tailwind/react";
import { ArrowLeftIcon, EyeIcon, PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { PowerIcon } from "@heroicons/react/24/solid";
import { DeleteProduct, getALLProduct } from "../AxiosAdmin";
import { CurrentUserContext } from "./CurrentUserProvider";
import AddProductForm from "./AddProductForm";
import { ViewAdminProduct } from "./ViewAdminProduct";
import EditProductAdmin from "./EditProductAdmin.jsx";

function Table() {
    const { setAdminToken } = useContext(CurrentUserContext);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    const [OpenForm, setOpenForm] = useState(false);
    const [EditForm, setEditForm] = useState(false);
    const [fetchproducts, setproducts] = useState([]);
    const [refresh, setrefresh] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const [EditproductData, setEditProductData] = useState(null);
    useEffect(() => {
        const fetchALLproduct = async () => {
            try {
                const response = await getALLProduct();
                setproducts(response.data);
            } catch (error) {
                console.error('Error fetching products', error);
            }
        };

        fetchALLproduct();
    }, [refresh]);

    const products = fetchproducts;
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

    const [VieProduct, setVieProduct] = useState(false);

    const HandleLogoutAdmin = () => {
        setAdminToken(null);
    };

    const HandleDeleteProduct = async (id) => {
        try {
            await DeleteProduct(id);
            setrefresh(!refresh);
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const HandleOpenForm = () => {
        setOpenForm(true);
    };
    const HandleEditForm = (data) => {
        setEditProductData(data);
        setEditForm(true);
    };
    const HandleViewProduct = (product) => {
        setSelectedProduct(product);
        setVieProduct(!VieProduct);
    };

    return (
        <>
            <div className="flex flex-wrap -mx-3 mb-5 w-full">
                <div className="w-full max-w-full px-3 mb-6 mx-auto">
                    <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
                        <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
                            <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
                                <h3 className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
                                    <span className="mr-3 font-semibold text-dark">Manage Products</span>
                                    <span className="mt-1 font-medium text-secondary-dark text-lg/normal">All Product from the Samsang Tech</span>
                                </h3>
                                <Tooltip
                                    content="Log out"
                                    animate={{
                                        mount: { scale: 1, y: 0 },
                                        unmount: { scale: 0, y: 25 },
                                    }}
                                    className="bg-red-500"
                                >
                                    <IconButton onClick={HandleLogoutAdmin} className="px-5 flex bg-red-500">
                                        <PowerIcon className="h-5 w-5" />
                                    </IconButton>
                                </Tooltip>
                            </div>
                            <div className="px-9 flex gap-1 py-2">
                                <Button onClick={HandleOpenForm} className="flex bg-green-500/90 justify-center place-items-center px-5 gap-1">
                                    <PlusIcon className="w-5 h-5" />
                                    Add Product
                                </Button>
                            </div>
                            <div className="flex-auto block w-full py-8 pt-6 px-9">
                                <div className="overflow-x-auto">
                                    <table className="w-full h-full my-0 align-middle text-dark border-neutral-200">
                                        <thead className="align-bottom">
                                        <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                                            <th className="pb-3 text-start min-w-[175px] font-sans text-l font-bold leading-none text-blue-gray-900 antialiased opacity-70">Product Name</th>
                                            <th className="pb-3 text-start min-w-[100px] font-sans text-l font-bold leading-none text-blue-gray-900 antialiased opacity-70">Description</th>
                                            <th className="pb-3 text-end min-w-[100px] font-sans text-l font-bold leading-none text-blue-gray-900 antialiased opacity-70">Category</th>
                                            <th className="pb-3 pr-12 text-end min-w-[175px] font-sans text-l font-bold leading-none text-blue-gray-900 antialiased opacity-70">Price</th>
                                            <th className="pb-3 text-center min-w-[50px] font-sans text-l font-bold leading-none text-blue-gray-900 antialiased opacity-70">Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {currentItems.map(product => (
                                            <tr className="border-b border-dashed last:border-b-0" key={product.product_id}>
                                                <td className="p-3 pl-0">
                                                    <div className="flex items-center">
                                                        <div className="relative inline-block shrink-0 rounded-2xl me-3">
                                                            <img src={product.imageUrl} className="w-[50px] h-[50px] object-cover inline-block shrink-0 rounded-2xl" alt="" />
                                                        </div>
                                                        <div className="flex flex-col justify-start">
                                                            <p className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-md/normal opacity-80 text-secondary-inverse hover:text-primary">{product.name}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-3 pr-0 text-start">
                                                    <span className="font-semibold text-light-inverse text-md/normal">{product.description.slice(0, 50)}....</span>
                                                </td>
                                                <td className="p-3 pr-0 text-end">
                                                    <span className={`text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg ${product.label.toLowerCase() === "phones" ? "bg-green-500/20" : product.label.toLowerCase() === "laptops" ? "bg-red-500/20" : product.label.toLowerCase() === "accessories" ? "bg-blue-500/20" : ""}`}>{product.label}</span>
                                                </td>
                                                <td className="p-3 pr-0 text-end">
                                                    <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary rounded-lg">{product.price}</span>
                                                </td>
                                                <td className="pr-0 text-center w-full h-full p-3 flex place-items-center justify-center w-full gap-1">
                                                    <Tooltip
                                                        content="Edit"
                                                        animate={{
                                                            mount: { scale: 1, y: 0 },
                                                            unmount: { scale: 0, y: 25 },
                                                        }}
                                                        className="bg-blue-500"
                                                    >
                                                        <IconButton onClick={() => HandleEditForm(product)} className="bg-blue-500/90">
                                                            <PencilIcon className="h-5 w-5" />
                                                        </IconButton>
                                                    </Tooltip>

                                                    <Tooltip
                                                        content="Delete"
                                                        animate={{
                                                            mount: { scale: 1, y: 0 },
                                                            unmount: { scale: 0, y: 25 },
                                                        }}
                                                        className="bg-red-500"
                                                    >
                                                        <IconButton onClick={() => HandleDeleteProduct(product.product_id)} className="bg-red-500/90">
                                                            <TrashIcon className="h-5 w-5" />
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
                                                        <IconButton onClick={() => HandleViewProduct(product)}>
                                                            <EyeIcon className="h-5 w-5" />
                                                        </IconButton>
                                                    </Tooltip>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="flex place-items-center justify-end p-2 w-full gap-4">
                                <Button
                                    variant="text"
                                    className="flex items-center gap-2"
                                    disabled={currentPage === 1}
                                    onClick={() => paginate(currentPage - 1)}
                                >
                                    <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
                                </Button>
                                <div className="flex items-center gap-2">
                                    Page <strong className="text-gray-900">{currentPage}</strong> of{" "}
                                    <strong className="text-gray-900">{Math.ceil(products.length / itemsPerPage)}</strong>
                                </div>
                                <Button
                                    variant="text"
                                    disabled={indexOfLastItem >= products.length}
                                    onClick={() => paginate(currentPage + 1)}
                                    className="flex items-center gap-2"
                                >
                                    Next <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {OpenForm && <AddProductForm refresh={refresh} setrefresh={setrefresh} setOpenForm={setOpenForm} />}

            {EditForm && <EditProductAdmin refresh={refresh} setrefresh={setrefresh} data={EditproductData} setOpenForm={setEditForm} />}
            <ViewAdminProduct HandleViewProduct={HandleViewProduct} VieProduct={VieProduct} selectedProduct={selectedProduct} />
        </>
    );
}

export default Table;
