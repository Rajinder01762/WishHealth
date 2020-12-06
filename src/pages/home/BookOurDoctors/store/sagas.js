import { put, takeLatest, call } from 'redux-saga/effects';
import { FETCH_BOOK_DOCTORS_DATA_REQUEST, FETCH_BOOK_DOCTORS_DATA_SUCCESS, FETCH_BOOK_DOCTORS_DATA_FAILED } from './types';
import { apiCallPost } from '../../../../common/axios';

async function callFetchBookDoctorsData(data){
    const res = await apiCallPost(data.url,data.payload);
    return res;
}

function* fetchBookDoctorsData(action){
    const response = yield call(callFetchBookDoctorsData,action);
    if(response && response.status === 201){
        if(response.data){
            action.callback(response.data);
            yield put ({type : FETCH_BOOK_DOCTORS_DATA_SUCCESS,doctors : response.data});
        }
    }
    else {
        yield put({type : FETCH_BOOK_DOCTORS_DATA_FAILED});
    }
}

export default function* BookOurDoctorsWatcher(){
    yield takeLatest(FETCH_BOOK_DOCTORS_DATA_REQUEST,fetchBookDoctorsData)
}