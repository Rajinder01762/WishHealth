import { FETCH_SERVICES_DATA_REQUEST } from "./types";

export const fetchServicesData = (data,callback) => ({
    type : FETCH_SERVICES_DATA_REQUEST,
    payload : data,
    callback
})  