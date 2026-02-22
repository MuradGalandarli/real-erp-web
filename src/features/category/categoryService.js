import { apiClient } from "../../core/api.js"


export const getAllCategoryAsync = async (page, size)=>{
return await apiClient.get(`/api/Category/get-all-category?page=${page}&size=${size}`)
}