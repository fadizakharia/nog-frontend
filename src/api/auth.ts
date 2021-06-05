import { AxiosError, AxiosResponse } from "axios";
import axiosInstance from "./axiosInstance";

const getCurrentUser = async () => {
  try {
    const result = await axiosInstance.get("/user");
    return result;
  } catch (err) {
    return err;
  }
};

const login = async (body: { characterName: string; password: string }) => {
  try {
    const result = await axiosInstance.post("/auth/login", { ...body });
    return result;
  } catch (err) {
    return err;
  }
};
const register = async (body: {
  characterName: string;
  password: string;
  confirm: string;
}) => {
  try {
    const result = await axiosInstance.post("/auth/register", { ...body });
    return result;
  } catch (err) {
    return err;
  }
};
const logout = async () => {
  try {
    const result = await axiosInstance.delete("/auth/logout", {});
    return result;
  } catch (err) {
    return err;
  }
};
export { getCurrentUser, login, register, logout };
