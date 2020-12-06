import { put, takeLatest, call } from 'redux-saga/effects';
import { GET_IN_TOUCH_API_REQUEST, GET_IN_TOUCH_API_SUCCESS, GET_IN_TOUCH_API_FAILED } from './types';
import { apiCallPost } from '../../../../common/axios';

async function callGetInTouchApi(data) {
    const res = await apiCallPost(data.url,data.payload);
    return res;
}

function* getInTouchApi(action) {
    const response = yield call(callGetInTouchApi,action);
    if(response && response.status === 200) {
        action.callback(response);
        yield put({ type : GET_IN_TOUCH_API_SUCCESS});
    } else{
        yield put({type : GET_IN_TOUCH_API_FAILED});
    }
}

export default function* GetInTouchWatcher() {
    yield takeLatest(GET_IN_TOUCH_API_REQUEST, getInTouchApi)
}