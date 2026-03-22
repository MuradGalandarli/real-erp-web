 import { apiClient } from "../../core/api"

 export const getAllBrandAsync = async(page,size)=>{
    return await apiClient.get(`/api/Brand/get-all-brnad?page=${page}&&size=${size}`) 
 }