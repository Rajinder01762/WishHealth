import { SET_VIDEO_SESSION_DATA } from "./types";

export const setVideoSessionData = (data) => ({
    type : SET_VIDEO_SESSION_DATA,
    payload : data
})