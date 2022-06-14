import axios from "axios";

export const requestsAPI = (isChecked: boolean) => axios.post("https://neko-cafe-back.herokuapp.com/auth/test", {success: isChecked})