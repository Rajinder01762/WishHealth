import { FETCH_BOOK_DOCTORS_DATA_REQUEST } from "./types";

export const fetchBookDoctorsData = (url,body,callback) => ({
    type : FETCH_BOOK_DOCTORS_DATA_REQUEST,
    url,
    payload : body,
    callback
})
