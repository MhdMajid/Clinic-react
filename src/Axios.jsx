import axios from "axios";
import Cookies from "universal-cookie";

const cookie =  new Cookies()
export const Token = cookie.get("token")

export const BaseUrl = "http://127.0.0.1:8000/api/"

export const Axios = axios.create({
    baseURL : BaseUrl,
    
    headers:{
        Authorization:`Bearer ${ cookie.get("token")}`,
    },
})