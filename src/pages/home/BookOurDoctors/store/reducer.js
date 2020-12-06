import { FETCH_BOOK_DOCTORS_DATA_SUCCESS, FETCH_BOOK_DOCTORS_DATA_FAILED, FETCH_BOOK_DOCTORS_DATA_REQUEST } from "./types"

const initialState = {
    doctors : []
}

const BookDoctorsReducer = (state=initialState,action) => {
    switch(action.type){
        case FETCH_BOOK_DOCTORS_DATA_REQUEST : {
            return {
                ...state
            }
        }
        case FETCH_BOOK_DOCTORS_DATA_SUCCESS : {
            return {
                ...state,
                doctors : action.doctors || []
            }
        }
        case FETCH_BOOK_DOCTORS_DATA_FAILED : {
            return {
                ...state
            }
        }
        default : {
            return state;
        }
    }
}

export default BookDoctorsReducer;