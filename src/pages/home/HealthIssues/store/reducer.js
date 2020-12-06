const {
  FETCH_VIDEOS_DATA_REQUEST,

  FETCH_VIDEOS_DATA_SUCCESS,

  FETCH_VIDEOS_DATA_FAILED,
  SET_VIDEO_STATUS,
} = require("./types");

const initialState = {
  videos: [],
  videoType : '',
  currentVideoData : {}
};

const HealthIssuesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VIDEOS_DATA_REQUEST: {
      return {
        ...state,
      };
    }
    case FETCH_VIDEOS_DATA_SUCCESS: {
      return {
        ...state,
        videos: action.videos || [],
      };
    }
    case FETCH_VIDEOS_DATA_FAILED: {
      return {
        ...state,
      };
    }
    case SET_VIDEO_STATUS : {
      return {
        ...state,
        videoType : action.videoType || '',
        currentVideoData : action.payload || {}
      }
    }
    default: {
      return state;
    }
  }
};

export default HealthIssuesReducer;
