import { apiClient } from "../../core/api";

export const getAllEmployeesAsync = async (page,size)=>{
    return await apiClient.get(`/api/Employee/get-all-employee?page=${page}&size=${size}`)
}









