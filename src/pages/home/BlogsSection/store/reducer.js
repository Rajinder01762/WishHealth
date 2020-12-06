const {
  FETCH_HEALTH_TIPS_DATA_REQUEST,
  FETCH_HEALTH_TIPS_DATA_SUCCESS,
  FETCH_HEALTH_TIPS_DATA_FAILED,

  FETCH_BLOGS_DATA_REQUEST,

  FETCH_BLOGS_DATA_SUCCESS,

  FETCH_BLOGS_DATA_FAILED,
  FETCH_MEDICAL_SHOTS_DATA_SUCCESS,
  FETCH_MEDICAL_SHOTS_DATA_FAILED,
  FETCH_MEDICAL_SHOTS_DATA_REQUEST,
} = require("./types");

const initialState = {
  blogs: [],
  healthTips: [],
  // medicalShots: [],
  medicalShots: {},
};

const BlogsSectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEDICAL_SHOTS_DATA_REQUEST: {
      return {
        ...state,
      };
    }
    case FETCH_MEDICAL_SHOTS_DATA_SUCCESS: {
      return {
        ...state,
        // medicalShots: action.medicalShots || [],
        medicalShots: action.medicalShots || {},
      };
    }
    case FETCH_MEDICAL_SHOTS_DATA_FAILED: {
      return {
        ...state,
      };
    }
    case FETCH_BLOGS_DATA_REQUEST: {
      return {
        ...state,
      };
    }
    case FETCH_BLOGS_DATA_SUCCESS: {
      return {
        ...state,
        blogs: action.blogs || [],
      };
    }
    case FETCH_BLOGS_DATA_FAILED: {
      return {
        ...state,
      };
    }
    case FETCH_HEALTH_TIPS_DATA_REQUEST: {
      return {
        ...state,
      };
    }
    case FETCH_HEALTH_TIPS_DATA_SUCCESS: {
      return {
        ...state,
        healthTips: action.healthTips || [],
      };
    }
    case FETCH_HEALTH_TIPS_DATA_FAILED: {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};

export default BlogsSectionReducer;
