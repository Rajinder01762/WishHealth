import { put, takeLatest, call } from "redux-saga/effects";
import {
  FETCH_HEALTH_TIPS_DATA_REQUEST,
  FETCH_HEALTH_TIPS_DATA_SUCCESS,
  FETCH_HEALTH_TIPS_DATA_FAILED,
  FETCH_BLOGS_DATA_REQUEST,
  FETCH_BLOGS_DATA_SUCCESS,
  FETCH_BLOGS_DATA_FAILED,
  FETCH_MEDICAL_SHOTS_DATA_FAILED,
  FETCH_MEDICAL_SHOTS_DATA_SUCCESS,
  FETCH_MEDICAL_SHOTS_DATA_REQUEST,
} from "./types";
import { apiCallPost } from "../../../../common/axios";
import { apiCallGet } from "../../../../common/axios";
// async function callFetchMedicalShotsData(data) {
//   const res = await apiCallPost(data.url, data.payload);
//   return res;
// }
async function callFetchMedicalShotsData(data) {
  const res = await apiCallGet(data.payload);
  return res;
}
async function callFetchBlogsData(data) {
  const res = await apiCallPost(data.url, data.payload);
  return res;
}
async function callFetchHealthTipsData(data) {
  const res = await apiCallPost(data.url, data.payload);
  return res;
}

// function* fetchMedicalShotsData(action) {
//   const response = yield call(callFetchMedicalShotsData, action);

//   const { data } = response;
//   if (data && data.status === "success") {
//     if (data.videos) {
//       action.callback(data.videos);
//       yield put({
//         type: FETCH_MEDICAL_SHOTS_DATA_SUCCESS,
//         medicalShots: data.videos,
//       });
//     }
//   } else {
//     yield put({ type: FETCH_MEDICAL_SHOTS_DATA_FAILED });
//   }
// }
function* fetchMedicalShotsData(action) {
  const response = yield call(callFetchMedicalShotsData, action);

  const { data } = response;

  if (data && data.status === "success") {
    if (data.medicalshot) {
      action.callback(data.medicalshot);
      yield put({
        type: FETCH_MEDICAL_SHOTS_DATA_SUCCESS,
        medicalShots: data.medicalshot,
      });
    }
  } else {
    yield put({ type: FETCH_MEDICAL_SHOTS_DATA_FAILED });
  }
}

function* fetchBlogsData(action) {
  const response = yield call(callFetchBlogsData, action);
  const { data } = response;
  if (data && data.status === "success") {
    if (data.videos) {
      action.callback(data.videos);
      yield put({ type: FETCH_BLOGS_DATA_SUCCESS, blogs: data.videos });
    }
  } else {
    yield put({ type: FETCH_BLOGS_DATA_FAILED });
  }
}

function* fetchHealthTipsData(action) {
  const response = yield call(callFetchHealthTipsData, action);

  const { data } = response;
  if (data && data.status === "success") {
    if (data.videos) {
      action.callback(data.videos);
      yield put({
        type: FETCH_HEALTH_TIPS_DATA_SUCCESS,
        healthTips: data.videos,
      });
    }
  } else {
    yield put({ type: FETCH_HEALTH_TIPS_DATA_FAILED });
  }
}

export default function* BlogsSectionWatcher() {
  yield takeLatest(FETCH_BLOGS_DATA_REQUEST, fetchBlogsData);
  yield takeLatest(FETCH_HEALTH_TIPS_DATA_REQUEST, fetchHealthTipsData);
  yield takeLatest(FETCH_MEDICAL_SHOTS_DATA_REQUEST, fetchMedicalShotsData);
}
