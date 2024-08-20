import instance from "./instance";
import { LoginData, RegisterData } from "../schemas/auth";

export const registerUser = async (data: RegisterData) => {
  const response = await instance.post("/blogpost/register", data);
  return response.data;
};

export const loginUser = async (data: LoginData) => {
  const response = await instance.post("/blogpost/login", data);
  return response.data;
};
