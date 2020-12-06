import { FETCH_VIDEOS_DATA_REQUEST, SET_VIDEO_STATUS } from "./types";

export const fetchVideosData = (url, data, callback) => ({
  type: FETCH_VIDEOS_DATA_REQUEST,
  url,
  payload: data,
  callback,
});

export const setVideoPlayOption = (url,data) => ({
  type : SET_VIDEO_STATUS,
  videoType : url,
  payload : data
})