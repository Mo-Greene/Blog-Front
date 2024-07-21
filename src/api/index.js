import axios from "axios";

export const client = axios.create({
  baseURL: import.meta.env.VITE_API_SERVER,
  timeout: 10000,
  headers: {
    "x-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Cache-Control": "no-cache",
    "Access-Control-Allow-Origin": "*",
  },
  responseType: "json",
})