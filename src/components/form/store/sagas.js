import { put, takeLatest, call } from "redux-saga/effects";
import {
  SEND_APP_LINK_REQUEST,
  SEND_APP_LINK_SUCCESS,
  SEND_APP_LINK_FAILED,
  DOCTOR_LOCATION_REQUEST,
  DOCTOR_LOCATION_SUCCESS,
  DOCTOR_LOCATION_FAILED,
} from "./types";
import { apiCallPost } from "../../../common/axios";
import { apiCallGet } from "../../../common/axios";
// import { doctorLocation } from "./action";

async function callSendAppLink(data) {
  const res = await apiCallPost(data.url, data.payload);
  return res;
}

async function callDoctorLocation(data) {
  const res = await apiCallGet(data.payload);
  return res;
}

function* sendAppLink(action) {
  const response = yield call(callSendAppLink, action);
  if (response && response.status) {
    action.callback(response.status);
    if (response.status === 200) {
      yield put({ type: SEND_APP_LINK_SUCCESS, cities: response.cities });
    } else {
      yield put({ type: SEND_APP_LINK_FAILED });
    }
  }
}

function* doctorLocation(action) {
  const response = yield call(callDoctorLocation, action);

  const { data } = response;
  if (data) {
    if (data.cities) {
      action.callback(data.cities);
      yield put({ type: DOCTOR_LOCATION_SUCCESS, cities: data.cities });
    } else {
      yield put({ type: DOCTOR_LOCATION_FAILED });
    }
  }
}

export default function* SearchDoctorWatcher() {
  yield takeLatest(SEND_APP_LINK_REQUEST, sendAppLink);
  yield takeLatest(DOCTOR_LOCATION_REQUEST, doctorLocation);
}
