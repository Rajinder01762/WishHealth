import { FETCH_TESTIMONIALS_DATA_REQUEST } from "./types";

export const fetchTestimonialsData = (data,callback) => ({
    type : FETCH_TESTIMONIALS_DATA_REQUEST,
    payload : data,
    callback
})