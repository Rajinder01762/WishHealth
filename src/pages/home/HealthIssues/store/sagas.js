import { put, takeLatest, call } from "redux-saga/effects";
import {
  FETCH_VIDEOS_DATA_REQUEST,
  FETCH_VIDEOS_DATA_SUCCESS,
  FETCH_VIDEOS_DATA_FAILED,
} from "./types";
import { apiCallPost } from "../../../../common/axios";

async function callFetchVideosData(data) {
  const res = await apiCallPost(data.url, data.payload);
  return res;
}

function* fetchVideosData(action) {
  const response = yield call(callFetchVideosData, action);
  const { data } = response;
  if (data && data.status === "success") {
    if (data.videos) {
      action.callback(data.videos);
      yield put({ type: FETCH_VIDEOS_DATA_SUCCESS, videos: data.videos });
    }
  } else {
    yield put({ type: FETCH_VIDEOS_DATA_FAILED });
  }
}

export default function* HealthIssueWatcher() {
  yield takeLatest(FETCH_VIDEOS_DATA_REQUEST, fetchVideosData);
}
