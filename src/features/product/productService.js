import{ apiClient }from "../../core/api"

export const getAllProductAsync = async(page,size)=>{
    return await apiClient.get(`/api/Product/get-all-product?page=${page}&size=${size}`)
}

export const addProductAsync = async(product)=>{
    debugger;
    return await apiClient.post(`/api/Product/add-product`,product, {
    headers: { "Content-Type": "multipart/form-data" }})
}