import { apiClient } from"../../core/api"

export const getAllCompanyAsync = async(page,size)=>
{
return await apiClient.get(`/api/Company/get-all-company?page=${page}&size=${size}`)
}
export const updateCompanyAsync = async(company)=>{
    debugger;
    return await apiClient.put(`/api/Company/update-company`,company)
}