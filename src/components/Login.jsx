import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { loginPost } from "./axios/userApi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigation = useNavigate()
  const [Formdata, setFormdata] = useState({
    username: "",
    password: "",
  })
  function handlechange(e) {
    setFormdata({
      ...Formdata,
      [e.target.name]: e.target.value
    })
  }

  async function handleLogin(e) {
    e.preventDefault()
    try {
      if (Formdata.username.trim() || Formdata.password.trim()) {
        const res = await loginPost(Formdata)
        console.log(Formdata)
        if (res) {
          // console.log(res.data)
          console.log(res)
          localStorage.setItem("token", res.data.Token);
          localStorage.setItem("usename", res.data.username);
          navigation('/')
          console.log("Login success");
        } else {
          console.log("invalid credintaials")
        }
      }
      else {
        console.log("please fill the form first")
      }


    } catch (error) {
      console.log(error, "error occure")
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
              placeholder="username"
              name="username"
              onChange={handlechange}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={handlechange}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <button
              // disabled={!Formdata.username || !Formdata.password}
              className="w-full bg-indigo-600 hover:bg-indigo-700 py-3 rounded-lg font-semibold transition">
              Login
            </button>
          </form>

          <p className="text-sm text-gray-400 text-center mt-4">
            Don’t have an account? <span className="text-indigo-400 cursor-pointer"><Link to={"/signup"}>Signup</Link></span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
