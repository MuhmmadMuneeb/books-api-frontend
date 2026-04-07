import React from 'react'

const Footer = () => {

    return (
        <footer className="bg-slate-900 text-gray-300 px-6 py-10 ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Brand */}
                <div>
                    <h2 className="text-xl font-bold text-white">
                        Book<span className="text-orange-400">Verse</span>
                    </h2>
                    <p className="text-sm mt-2">
                        Discover, read and grow with the best books online.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-white font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-orange-400 cursor-pointer">Home</li>
                        <li className="hover:text-orange-400 cursor-pointer">Books</li>
                        <li className="hover:text-orange-400 cursor-pointer">Categories</li>
                        <li className="hover:text-orange-400 cursor-pointer">Contact</li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h3 className="text-white font-semibold mb-3">Follow Us</h3>
                    <p className="text-sm">Facebook</p>
                    <p className="text-sm">Instagram</p>
                    <p className="text-sm">Twitter</p>
                </div>
            </div>

            <hr className="my-6 border-gray-700" />

            <p className="text-center text-sm">
                © 2026 BookVerse. All rights reserved.
            </p>
        </footer>
    );


}

export default Footer
