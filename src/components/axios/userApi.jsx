import axios from "axios";

const api = axios.create({
  baseURL: "https://books-api-backed.vercel.app/students", 
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // 👈 ADD THIS LINE
});

export const loginPost = async (data) => {
  return api.post("/login", data);
};

export const registerPost = async (data) => {
  return api.post("/register", data);
};