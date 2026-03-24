 import { apiClient } from "../../core/api"

 export const getAllBrandAsync = async(page,size)=>{
    return await apiClient.get(`/api/Brand/get-all-brnad?page=${page}&&size=${size}`) 
 }

 export const addProductAsync = async(product)=>{
    return await apiClient.post(`/api/Brand/add-brand`,product)
 }