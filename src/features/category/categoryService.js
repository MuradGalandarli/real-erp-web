import { apiClient } from "../../core/api.js"


export const getAllCategoryAsync = async (page, size)=>{
return await apiClient.get(`/api/Category/get-all-category?page=${page}&size=${size}`)
}

export const deleteCategoryAsync = async(id)=>{
    return await apiClient.delete(`/api/Category/delete-category?id=${id}`)
}