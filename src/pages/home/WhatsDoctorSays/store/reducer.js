const { FETCH_TESTIMONIALS_DATA_REQUEST, FETCH_TESTIMONIALS_DATA_SUCCESS, FETCH_TESTIMONIALS_DATA_FAILED } = require("./types")

const initialState = {
    testimonials : []
}

const TestimonialsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_TESTIMONIALS_DATA_REQUEST : {
            return {
                ...state
            }
        }
        case FETCH_TESTIMONIALS_DATA_SUCCESS : {
            return {
                ...state,
                testimonials : action.testimonials || []

            }
        }
        case FETCH_TESTIMONIALS_DATA_FAILED : {
            return {
                ...state
            }
        }
        default : {
            return state
        }
    }
}

export default TestimonialsReducer;