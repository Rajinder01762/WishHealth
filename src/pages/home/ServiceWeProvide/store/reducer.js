const { FETCH_SERVICES_DATA_REQUEST, FETCH_SERVICES_DATA_SUCCESS, FETCH_SERVICES_DATA_FAILED } = require("./types")

const initialState = {
    services : []
}

const ServiceReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SERVICES_DATA_REQUEST : {
            return {
                ...state
            }
        }
        case FETCH_SERVICES_DATA_SUCCESS : {
            return {
                ...state,
                services : action.services || []
            }
        }
        case FETCH_SERVICES_DATA_FAILED : {
            return {
                ...state
            }
        }
        default : {
            return state
        }
    }
}

export default ServiceReducer;