import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    bookTitle: "",
    price: "",
    desc: "",
    bookImg: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // later → send to backend API
    console.log(formData);

    // reset form
    setFormData({
      bookTitle: "",
      price: "",
      desc: "",
      bookImg: "",
    });
  };

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-lg p-6 rounded-xl shadow-md"
      >
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          Add New Book 📘
        </h2>

        {/* Book Title */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Book Title
          </label>
          <input
            type="text"
            name="bookTitle"
            value={formData.bookTitle}
            onChange={handleChange}
            required
            placeholder="Enter book title"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Price
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            placeholder="Enter price"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            name="desc"
            value={formData.desc}
            onChange={handleChange}
            required
            rows="4"
            placeholder="Enter book description"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Book Image URL */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Book Image URL
          </label>
          <input
            type="text"
            name="bookImg"
            value={formData.bookImg}
            onChange={handleChange}
            placeholder="Paste image URL (optional)"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md font-medium"
        >
          Add Book
        </button>
      </form>
    </section>
  );
};

export default Form;
