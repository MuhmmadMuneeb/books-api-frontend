import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { getDta, AddBook, EditBook, Deletebook } from "./axios/Api";

export default function AdminTheme() {
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    bookTitle: "",
    price: "",
    desc: "",
    bookImg: ""
  });

  /* ================== FETCH BOOKS ================== */
  const fetchBooks = async () => {
    try {
      const res = await getDta();
      if (res.status === 200) setData(res.data);
    } catch (error) {
      console.error("Fetch failed:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  /* ================== HANDLE INPUT ================== */
  const handleChange = (e) => {
    if (e.target.name === "bookImg") {
      setFormData({
        ...formData,
        bookImg: e.target.files[0], // 👈 get real file
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  /* ================== ADD / EDIT BOOK ================== */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("bookTitle", formData.bookTitle);
    data.append("price", formData.price);
    data.append("desc", formData.desc);

    if (formData.bookImg) {
      data.append("bookImg", formData.bookImg);
    }

    try {
      if (editId) {
        await EditBook(editId, data);
        alert("Book updated successfully!");
        setEditId(null);
      } else {
        await AddBook(data);
        alert("Book added successfully!");
      }

      setFormData({
        bookTitle: "",
        price: "",
        desc: "",
        bookImg: null
      });

      fetchBooks();
    } catch (error) {
      console.error(error);
      alert("Failed to save book.");
    }
  };



  /* ================== DELETE BOOK ================== */
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this book?")) return;
    try {
      await Deletebook(id);
      fetchBooks();
    } catch (error) {
      console.error(error);
      alert("Failed to delete book.");
    }
  };

  /* ================== POPULATE FORM FOR EDIT ================== */
  const handleEditClick = (book) => {
    setEditId(book._id);
    setFormData({
      bookTitle: book.bookTitle,
      price: book.price,
      desc: book.desc,
      bookImg: book.bookImg || ""
    });
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to form
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-8">
      {/* =============== HEADER =============== */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-10 text-center tracking-wide"
      >
        📚 Admin Dashboard
      </motion.h1>

      {/* =============== FORM =============== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-900 p-8 rounded-2xl max-w-xl mx-auto shadow-2xl space-y-5 border border-gray-800 mb-14"
      >
        <h2 className="text-2xl font-semibold text-indigo-400">
          {editId ? "Edit Book" : "Add New Book"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="bookTitle"
            placeholder="Book Title"
            value={formData.bookTitle}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <textarea
            name="desc"
            placeholder="Description"
            value={formData.desc}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <input
            type="file"
            name="bookImg"
            placeholder="Image URL (optional)"
            // value={formData.bookImg}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 py-3 rounded-lg font-semibold transition duration-300"
          >
            {editId ? "Update Book" : "Add Book"}
          </button>
        </form>
      </motion.div>

      {/* =============== BOOK CARDS =============== */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {data.map((book) => (
          <div
            key={book._id}
            className="bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-800 hover:scale-105 transition duration-300"
          >
            {book.bookImg && (
              <div className="w-full h-48 mb-4 overflow-hidden rounded-xl">
                <img
                  src={`http://localhost:3000/uploads/${book.bookImg}`}
                  alt={book.bookTitle}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>
            )}
            <h3 className="text-xl font-semibold">{book.bookTitle}</h3>
            <p className="text-indigo-400 mt-1">${book.price}</p>
            <p className="text-gray-400 text-sm mt-2">{book.desc}</p>

            <div className="flex gap-3 mt-5">
              <button
                onClick={() => handleEditClick(book)}
                className="flex-1 bg-yellow-500 hover:bg-yellow-600 py-2 rounded-lg font-medium transition"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(book._id)}
                className="flex-1 bg-red-600 hover:bg-red-700 py-2 rounded-lg font-medium transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
