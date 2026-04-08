// src/components/Login.jsx
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { loginPost } from "./axios/userApi";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // Handle input change
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  // Handle login
  async function handleLogin(e) {
    e.preventDefault();
    if (!formData.username.trim() || !formData.password.trim()) {
      console.log("Please fill the form first");
      return;
    }

    try {
      const res = await loginPost(formData);

      if (res.status === 200 && res.data.Token) {
        localStorage.setItem("token", res.data.Token);
        localStorage.setItem("username", res.data.username);
        console.log("Login success");
        navigate("/"); // Redirect to home
      } else {
        console.log(res.data.message || "Invalid credentials");
      }
    } catch (error) {

      console.error("Error occurred:", error.response?.data || error);
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
          src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
          alt="Books"
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
          <h2 className="text-3xl font-bold mb-6 text-center">Welcome Back</h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={formData.username}
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
              Login
            </button>
          </form>

          <p className="text-sm text-gray-400 text-center mt-4">
            Don’t have an account?{" "}
            <span className="text-indigo-400 cursor-pointer">
              <Link to="/signup">Signup</Link>
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}