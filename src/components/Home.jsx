import React from "react";
import { Link } from "react-router-dom";
import { getDta } from "./axios/Api";
import { useState, useEffect } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { MdChevronRight } from "react-icons/md";

const Home = () => {
    const [data, setdata] = useState([])
    const [open, setopen] = useState(false)
    function handleSideBar() {
        setopen(!open)
    }
    async function response() {
        try {
            const res = await getDta()

            console.log(res)
            if (res.status === 200) {
                setdata(res.data)
            }
        } catch (error) {
            console.error("Delete failed:", error.response?.data || error.message)
        }
    }
    useEffect(() => {
        response()
    }, [])

    return (
        /* Theme Change: Changed bg-gray-100 to bg-slate-900 (Dark background) */
        <section className="px-6 py-16 bg-slate-900 min-h-screen relative">
            
            {/* Theme Change: Sidebar Toggle Button (Darker slate with amber icon) */}
            <div onClick={handleSideBar} className="bg-slate-800 p-4 rounded-r-full transition duration-200 ease-in cursor-pointer hover:scale-105 absolute left-0 top-[10%] border-y border-r border-slate-700 shadow-lg shadow-black/50">
                <HiOutlineMenu size={24} className="text-amber-500" />
            </div>

            {/* Theme Change: Sidebar (Deep navy/slate with gold accents) */}
            <div className={`bg-slate-800 absolute z-50 left-0 top-0 h-full w-2xs transition-all ease-in-out duration-200 border-r border-slate-700 ${open ? "translate-x-0 " : "-translate-x-full"} `} >
                <div onClick={handleSideBar} className="px-2 rounded-md py-1.5 bg-slate-700 text-amber-500 cursor-pointer m-2.5 border border-slate-600 shadow-lg inline-block "><RxCross2 size={30} /></div>
                <div className="group cursor-pointer " >
                    <h3 className="flex text-white font-medium items-center gap-1.5 pl-2.5 bg-amber-600 p-3.5"><span><MdChevronRight size={30} /></span> General</h3>
                    <div className="flex h-0 group-hover:h-48 overflow-hidden transition-[height] duration-300 ease-in-out flex-col pl-2.5 gap-3.5 [&>a]:cursor-pointer bg-slate-700 text-slate-200 font-medium [&>a]:hover:text-amber-500 ">
                        <a href="/login" className="pt-4">Login</a>
                        <a href="/signup">Signup</a>
                        <a href="/admin">Admin login</a>
                    </div>
                </div>
            </div>

            {/* Heading */}
            <div className="text-center mb-12">
                {/* Theme Change: Text color to white/slate-200 */}
                <h2 className="text-3xl font-bold text-slate-100">
                    Featured <span className="text-amber-500">Books</span>
                </h2>
                <p className="text-slate-400 mt-2">
                    Hand-picked books for your growth 📖
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {data.map((book) => (
                    <div
                        key={book._id}
                        /* Theme Change: Card background to slate-800 and border-slate-700 */
                        className="bg-slate-800 border border-slate-700 rounded-xl shadow-md hover:shadow-2xl hover:shadow-amber-500/10 transition duration-300 overflow-hidden"
                    >
                        {/* Image */}
                        <img
                            src={`http://localhost:3000/uploads/${book.bookImg}`}
                            alt={book.bookTitle}
                            className="h-60 w-full object-cover grayscale-[20%] hover:grayscale-0 transition-all"
                        />

                        {/* Content */}
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-slate-100">
                                {book.bookTitle}
                            </h3>
                            <p className="text-sm text-slate-400">{book.author}</p>

                            <div className="flex items-center justify-between mt-4">
                                <span className="text-amber-500 font-bold">
                                    {book.price}
                                </span>
                                <Link
                                    to={`/book/${book._id}`}
                                    /* Theme Change: Button color to Amber */
                                    className="bg-amber-600 hover:bg-amber-500 text-white text-sm px-4 py-2 rounded-md transition-colors"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Home;