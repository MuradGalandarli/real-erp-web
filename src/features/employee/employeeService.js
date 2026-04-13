import { apiClient } from "../../core/api";

export const getAllEmployeesAsync = async (page,size)=>{
    return await apiClient.get(`/api/Employee/get-all-employee?page=${page}&size=${size}`)
}

export const addEmployeeAsync = async(employee)=>{
    return await apiClient.post(`/api/Employee/add-employee`,employee)
}

export const updateEmployeeAsync = async(employee)=>{
    return await apiClient.put(`/api/Employee/update-employee`,employee)
}









