import axios from "axios";

export const api = axios.create({
  // baseURL: import.meta.env.VITE_API_KEY,
  baseURL: "https://teletech24.onrender.com",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
