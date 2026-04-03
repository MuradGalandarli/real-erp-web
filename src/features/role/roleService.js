import { apiClient } from "../../core/api";

export const getAllRoleAsync = async (page, size) => {
  return await apiClient.get(
    `api/Role/get-all-role?page=${page}&&size=${size}`,
  );
};

export const addRoleAsync = async (role) => {
  return await apiClient.post(`api/Role/create-role`, role);
};
