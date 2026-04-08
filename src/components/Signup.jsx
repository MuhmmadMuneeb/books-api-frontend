// src/components/Signup.jsx
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { registerPost } from "./axios/userApi";
import { useState } from "react";

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleRegister(e) {
    e.preventDefault();
    console.log('handlereg call but nothing happend')
    if (!formData.username.trim() || !formData.email.trim() || !formData.password.trim()) {
      console.log("Please fill all fields");
      return;
    }

    try {
      const res = await registerPost(formData);

      if (res.status === 201) {
        console.log("User created successfully");
        navigate("/login"); // Redirect to login page
      } else {
        console.log(res.data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Error occurred:", error.response?.data || error.message);
    }
  }

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">

      {/* Left Image */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden md:flex w-1/2 items-center justify-center"
      >
        <img
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
          alt="Library"
          className="w-3/4 rounded-2xl shadow-2xl"
        />
      </motion.div>

      {/* Right Form */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex items-center justify-center"
      >
        <div className="bg-gray-900 p-8 rounded-2xl w-[90%] max-w-md shadow-xl">
          <h2 className="text-3xl font-bold mb-6 text-center">Create Account</h2>

          <form onSubmit={handleRegister} className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 py-3 rounded-lg font-semibold transition"
            >
              Sign Up
            </button>
          </form>

          <p className="text-sm text-gray-400 text-center mt-4">
            Already have an account?{" "}
            <span className="text-indigo-400 cursor-pointer">
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}