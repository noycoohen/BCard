import axios from "axios";
import { servUrl } from "../utils/utils";
const token = localStorage.getItem("token");
const headers = {
  headers: {
    Authorization: token,
  },
};
const baseUrl = `${servUrl}/users`;

const register = async (formValues) => {
  return await axios.post(`${baseUrl}`, formValues);
};
const userService = { register };
export default userService;
