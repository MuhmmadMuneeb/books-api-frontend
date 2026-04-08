import React, { useEffect, useState } from "react";
import { getDta } from "./axios/Api";
import { Link } from "react-router-dom";

const Books = () => {
    const [books, setBooks] = useState([]);

    async function fetchBooks() {
        try {
            const res = await getDta();
            if (res.status === 200) setBooks(res.data);
        } catch (err) {
            console.error("Error fetching books:", err.response?.data || err.message);
        }
    }

    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <section className="px-6 py-16 bg-slate-900 min-h-screen">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-100">
                    All <span className="text-amber-500">Books</span>
                </h2>
                <p className="text-slate-400 mt-2">
                    Explore our extensive collection of books 📚
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {books.map((book) => (
                    <div
                        key={book._id}
                        className="bg-slate-800 border border-slate-700 rounded-xl shadow-md hover:shadow-2xl hover:shadow-amber-500/10 transition duration-300 overflow-hidden"
                    >
                        <img
                            src={`http://localhost:3000/uploads/${book.bookImg}`}
                            alt={book.bookTitle}
                            className="h-60 w-full object-cover grayscale-[20%] hover:grayscale-0 transition-all"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-slate-100">
                                {book.bookTitle}
                            </h3>
                            <p className="text-sm text-slate-400">{book.author}</p>
                            <div className="flex items-center justify-between mt-4">
                                <span className="text-amber-500 font-bold">{book.price}</span>
                                <Link
                                    to={`/book/${book._id}`}
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

export default Books;