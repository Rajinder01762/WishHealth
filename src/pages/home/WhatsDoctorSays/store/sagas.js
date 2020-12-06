import { put, takeLatest, call } from 'redux-saga/effects';
import { FETCH_TESTIMONIALS_DATA_REQUEST, FETCH_TESTIMONIALS_DATA_SUCCESS, FETCH_TESTIMONIALS_DATA_FAILED } from './types';
import { apiCallGet } from '../../../../common/axios';

async function callFetchTestimonialsData(data) {
    const res = await apiCallGet(data.payload)
    return res;
}

function* fetchTestimonialsData(action) {
    const response = yield call(callFetchTestimonialsData,action);
    if(response && response.status === 200){
        if(response.data){
            action.callback(response.data);
            yield put({type : FETCH_TESTIMONIALS_DATA_SUCCESS, testimonials : response.data})
        }
    }
    else {
        yield put({type : FETCH_TESTIMONIALS_DATA_FAILED});
    }
}

export default function* WhatDoctorSaysWatcher(){
    yield takeLatest(FETCH_TESTIMONIALS_DATA_REQUEST,fetchTestimonialsData)
}