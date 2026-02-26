import { apiClient } from "../../core/api.js"


export const getAllCategoryAsync = async (page, size)=>{
return await apiClient.get(`/api/Category/get-all-category?page=${page}&size=${size}`)
}

export const deleteCategoryAsync = async(id)=>{
    return await apiClient.delete(`/api/Category/delete-category?id=${id}`)
}
export const updateCategoryAsync = async(category)=>{
    return await apiClient.put(`/api/Category/update-category`,category)
}
export const addCategoryAsync = async (category) =>{
    return await apiClient.post(`/api/Category/add-category`,category)
}