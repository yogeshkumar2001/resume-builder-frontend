import axios from "axios";
import { APIURL } from "./constant";
export const getCallAPI = async ({ path, params = null }) => {
    let apiPath = params != null ? APIURL + path + params : APIURL + path;
    try {
        let res = await axios.get(apiPath)
        return res;
    }
    catch (error) {
        return error
    }
}
export const postCallAPI = async ({ path, Data }) => {
    if (!Data) {
        return "required data for post call";
    }

    let apiPath = APIURL + path;
    try {
        let response = await axios.post(apiPath, { data: Data });
        return response.data; // Extract the data from the axios response
    } catch (error) {
        console.error("Error in postCallAPI:", error);
        throw error; // Re-throw the error to handle it elsewhere if needed
    }
};