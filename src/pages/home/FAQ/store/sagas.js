import { put, takeLatest, call } from 'redux-saga/effects';
import { FETCH_FAQS_REQUEST, FETCH_FAQS_FAILED, FETCH_FAQ_SUCCESS } from './types';
import { apiCallGet } from '../../../../common/axios';

async function callFetchAllFAQS  (data) {
   const res = await apiCallGet(data.payload)
   return res;
}

function* fetchAllFAQS (action) {
    const response = yield call(callFetchAllFAQS,action);
    const { data } = response;
    if(data && data.status === 'success') {
        if(data.faqs){
            action.callback(data.faqs)
            yield put({type : FETCH_FAQ_SUCCESS , faqsData : data.faqs})
        }
    }
    else {
        yield put ({type : FETCH_FAQS_FAILED});
    }
}

export default function* FAQSWatcher() {
    yield takeLatest(FETCH_FAQS_REQUEST, fetchAllFAQS)
}