import{ apiClient }from "../../core/api"

export const getAllProductAsync = async(page,size)=>{
    return await apiClient.get(`/api/Product/get-all-product?page=${page}&size=${size}`)
}