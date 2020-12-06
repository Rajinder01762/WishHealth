import { put, takeLatest, call } from "redux-saga/effects";
import {
  FEATURES_DATA_REQUEST,
  FEATURES_DATA_SUCCESS,
  FEATURES_DATA_FAILED,
} from "./types";

import { apiCallGet } from "../../../../common/axios";

async function callFetchFeaturesData(data) {
  const res = await apiCallGet(data.payload);
  return res;
}

function* fetchFeaturesData(action) {
  const response = yield call(callFetchFeaturesData, action);

  const { data } = response;

  if (data) {
    if (data.content) {
      action.callback(data.content);
      yield put({
        type: FEATURES_DATA_SUCCESS,
        features: data.content,
      });
    }
  } else {
    yield put({ type: FEATURES_DATA_FAILED });
  }
}

export default function* FeaturesWatcher() {
  yield takeLatest(FEATURES_DATA_REQUEST, fetchFeaturesData);
}
