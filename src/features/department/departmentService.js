import { apiClient } from "../../core/api"

export const getAllDepartmentAsync = async (page,size)=>{
    return await apiClient.get(`api/Department/get-all-department?page=${page}&size=${size}`)
}