import axios from "axios";
import { APIURL } from "./constant";
export const getCallAPI = async ({ path, params = null }) => {
    let apiPath = null
    if (params) {
        apiPath = APIURL + path + params
    } else {
        apiPath = APIURL + path
    }
    try {
        let res = await axios.get(apiPath)
        return res;
    }
    catch (error) {
        return error
    }
}