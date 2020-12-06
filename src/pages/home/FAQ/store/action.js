import { FETCH_FAQS_REQUEST } from "./types";

export const fetchFAQS = (data,callback) => ({
    type : FETCH_FAQS_REQUEST,
    payload : data,
    callback
})