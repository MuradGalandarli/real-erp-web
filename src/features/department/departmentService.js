import { apiClient } from "../../core/api"

export const getAllDepartmentAsync = async (page,size)=>{
    return await apiClient.get(`api/Department/get-all-department?page=${page}&size=${size}`)
}

export const getAddDepartmentAsync = async(data)=>{
return await apiClient.post(`api/Department/add-department`,data)
}
export const updateDepartmentAsync = async(department)=>{
    return await apiClient.put(`/api/Department/update-department`,department)
}
export const deleteDepartmentAsync = async (id)=>{
return await apiClient.delete(`/api/Department/delete-department?id=${id}`);
}