 import { apiClient } from "../../core/api"

 export const getAllBrandAsync = async(page,size)=>{
    return await apiClient.get(`/api/Brand/get-all-brnad?page=${page}&&size=${size}`) 
 }

 export const addProductAsync = async(product)=>{
    return await apiClient.post(`/api/Brand/add-brand`,product)
 }

 export const updateBrandAsync = async(brand)=>{
   return await apiClient.put(`api/Brand/update-brand`,brand)
 }

 export const deleteBrandAsync = async(id)=>{
   return await apiClient.delete(`api/Brand/delete-brand?id=${id}`)
 }


