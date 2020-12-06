import { FETCH_FAQS_REQUEST, FETCH_FAQ_SUCCESS, FETCH_FAQS_FAILED } from './types';

const initialState = {
    FAQSData : []
}

const FAQSReducer = (state = initialState,action) => {
    switch(action.type) {
        case FETCH_FAQS_REQUEST : {
                return{
                    ...state
                }
        }
        case FETCH_FAQ_SUCCESS : {
            return {
                ...state,
                FAQSData : action.faqsData || []
            }
        }
        case FETCH_FAQS_FAILED : {
            return {
                ...state
            }
        }
        default : {
            return state
        }
    }
}

export default FAQSReducer;