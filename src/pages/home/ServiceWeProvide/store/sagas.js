import { put, takeLatest, call } from 'redux-saga/effects';
import { FETCH_SERVICES_DATA_REQUEST, FETCH_SERVICES_DATA_SUCCESS, FETCH_SERVICES_DATA_FAILED } from './types';
import { apiCallGet } from '../../../../common/axios';

async function callFetchServicesData(data) {
    const res = await apiCallGet(data.payload)
    return res;
}

function* fetchServiceData(action) {
    const response = yield call(callFetchServicesData, action);
    const { data,status } = response;
    if(status === 200) {
        if(data){
            action.callback(data)
            yield put({type : FETCH_SERVICES_DATA_SUCCESS, services : data})
        }
    }
    else {
        yield put({type : FETCH_SERVICES_DATA_FAILED});
    }
}

export default function* ServicesWatcher() {
    yield takeLatest(FETCH_SERVICES_DATA_REQUEST, fetchServiceData)
}