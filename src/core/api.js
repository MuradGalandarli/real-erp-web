import axios from "axios";
import { API_URL } from "./config.js"

export const apiClient = axios.create({
    baseURL:API_URL,
    headers:{
        "Content-Type":"application/json"
    },
}) 