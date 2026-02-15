import {apiClient} from "../../core/api.js"

export const getAllProduct = async (page,size)=>{return await apiClient.get(`/api/User/get-all-user?page=${page}&size=${size}`)}






