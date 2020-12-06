const { SEND_APP_LINK_REQUEST, SEND_APP_LINK_SUCCESS } = require("./types");
const {
  DOCTOR_LOCATION_REQUEST,
  DOCTOR_LOCATION_SUCCESS,
  DOCTOR_LOCATION_FAILED,
} = require("./types");
const initialState = {
  cities: [],
};

const SearchDoctorFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_APP_LINK_REQUEST: {
      return {
        ...state,
      };
    }
    case SEND_APP_LINK_SUCCESS: {
      return {
        ...state,
      };
    }
    case DOCTOR_LOCATION_REQUEST: {
      return {
        ...state,
      };
    }
    case DOCTOR_LOCATION_SUCCESS: {
      return {
        cities: action.cities || [],
      };
    }
    case DOCTOR_LOCATION_FAILED: {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};

export default SearchDoctorFormReducer;
