import { SEND_APP_LINK_REQUEST } from "./types";
import { DOCTOR_LOCATION_REQUEST } from "./types";
export const sendAppLink = (url, body, callback) => ({
  type: SEND_APP_LINK_REQUEST,
  url,
  payload: body,
  callback,
});

export const doctorLocation = (data, callback) => {
  return {
    type: DOCTOR_LOCATION_REQUEST,
    payload: data,
    callback,
  };
};
