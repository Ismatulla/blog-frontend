import instance from "./instance";
import { LoginData, RegisterData, CreatePostData } from "../schemas/auth";

export const registerUser = async (data: RegisterData) => {
  const response = await instance.post("/blogpost/register", data);
  return response.data;
};

export const loginUser = async (data: LoginData) => {
  const response = await instance.post("/blogpost/login", data);
  return response.data;
};

export const createPost = async (data: CreatePostData) => {
  const response = await instance.post("/blogpost/createPost", data);
  return response.data;
};

export const getAllPosts = async () => {
  const response = await instance.get("/blogpost/posts");
  return response.data;
};
