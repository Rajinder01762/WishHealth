import { FEATURES_DATA_REQUEST } from "./types";

export const fetchFeaturesData = (data, callback) => ({
  type: FEATURES_DATA_REQUEST,

  payload: data,
  callback,
});
