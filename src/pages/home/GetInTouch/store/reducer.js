import { GET_IN_TOUCH_API_REQUEST, GET_IN_TOUCH_API_SUCCESS, GET_IN_TOUCH_API_FAILED } from "./types";

const initialState = {

}

const GetInTouchReducer = (state=initialState,action) => {
    switch(action.type) {
        case GET_IN_TOUCH_API_REQUEST : {
            return {
                ...state
            }
        }
        case GET_IN_TOUCH_API_SUCCESS : {
            return {
                ...state
            }
        }
        case GET_IN_TOUCH_API_FAILED : {
            return {
                ...state
            }
        }
        default : {
            return state
        }
    }
}

export default GetInTouchReducer;