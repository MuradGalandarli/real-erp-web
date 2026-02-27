import { apiClient } from "../../core/api"

export const getAllWarehouseAsync = async (page,size)=>{
return await apiClient.get(`/api/Warehouse/get-all-warehouse?page=${page}&size=${size}`)
} 