// src/axios/userApi.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://books-api-backed.vercel.app/api/students", 
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginPost = async (data) => {
  return api.post("/login", data);
};

export const registerPost = async (data) => {
  return api.post("/register", data);
};