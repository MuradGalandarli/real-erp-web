import {apiClient} from "../../core/api.js"

export const getAllUser = async (page,size)=>{return await apiClient.get(`/api/User/get-all-user?page=${page}&size=${size}`)}

//export const addUser = async (user)=>{return await apiClient.post(`/api/User/create-user`,user)}

export const addUser = async (user) => {
  return await apiClient.post(`/api/User/creaate-user`, user);
}




