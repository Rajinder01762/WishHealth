const {
  FEATURES_DATA_REQUEST,
  FEATURES_DATA_SUCCESS,
  FEATURES_DATA_FAILED,
} = require("./types");

const initialState = {
  features: "",
};

const FeaturesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FEATURES_DATA_REQUEST: {
      return {
        ...state,
      };
    }
    case FEATURES_DATA_SUCCESS: {
      return {
        ...state,
        features: action.features || "",
      };
    }
    case FEATURES_DATA_FAILED: {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};

export default FeaturesReducer;
