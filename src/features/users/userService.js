import {apiClient} from "../../core/api.js"

export const getAllUser = async (page,size)=>{
  return await apiClient.get(`/api/User/get-all-user?page=${page}&size=${size}`)}

export const addUser = async (user) => {
  return await apiClient.post(`/api/User/creaate-user`, user);
}

export const getByIdUserAsync = async (email) => {
  return await apiClient.get(`/api/User/get-by-email-user?email=${email}`);
}
export const updateUserAsync = async (user)=>{
  return await apiClient.put(`/api/User/update-user`,user)
}





