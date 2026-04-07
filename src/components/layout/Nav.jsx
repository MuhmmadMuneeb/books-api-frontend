import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Nav = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        navigate("/login");
    };

    return (

        <nav className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <h1 className="text-2xl font-bold tracking-wide">
                Book<span className="text-orange-400">Verse</span>
            </h1>

            {/* Menu */}
            <ul className="hidden md:flex gap-6 text-sm font-medium">
                <li className="hover:text-orange-400 cursor-pointer"><Link to={"/"}> Home</Link></li>
                <li className="hover:text-orange-400 cursor-pointer">Books</li>
                <li className="hover:text-orange-400 cursor-pointer">Categories</li>
                <li className="hover:text-orange-400 cursor-pointer">About</li>
                <li className="hover:text-orange-400 cursor-pointer"><Link to={'/admin'}>Admin</Link></li>
            </ul>

            {/* Button */}
            <button
                onClick={handleLogout}
                className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
            >
                Logout
            </button>
        </nav>


    )
}

export default Nav
