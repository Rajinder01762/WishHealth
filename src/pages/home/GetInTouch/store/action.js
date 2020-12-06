import { GET_IN_TOUCH_API_REQUEST } from "./types";

export const getInTouchApi = (url, body,callback) => ({
    type : GET_IN_TOUCH_API_REQUEST,
    url,
    payload : body,
    callback
})