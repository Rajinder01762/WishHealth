import {
  FETCH_BLOGS_DATA_REQUEST,
  FETCH_HEALTH_TIPS_DATA_REQUEST,
  FETCH_MEDICAL_SHOTS_DATA_REQUEST,
} from "./types";

export const fetchBlogsData = (url, data, callback) => ({
  type: FETCH_BLOGS_DATA_REQUEST,
  url,
  payload: data,
  callback,
});

export const fetchHealthTipsData = (url, data, callback) => ({
  type: FETCH_HEALTH_TIPS_DATA_REQUEST,
  url,
  payload: data,
  callback,
});

// export const fetchMedicalShotsData = (url, data, callback) => ({
//   type: FETCH_MEDICAL_SHOTS_DATA_REQUEST,
//   url,
//   payload: data,
//   callback,
// });

export const fetchMedicalShotsData = (data, callback) => ({
  type: FETCH_MEDICAL_SHOTS_DATA_REQUEST,

  payload: data,
  callback,
});
