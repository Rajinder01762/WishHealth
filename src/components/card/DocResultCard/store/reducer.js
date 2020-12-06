const { SET_VIDEO_SESSION_DATA } = require("./types")

const initialState = {
    session : {},
    stream : {},
    audioType : 'unmute',
    videoType : 'unmute'
}

const VideoSessionDataReducer = (state = initialState,action) => {
    switch(action.type) {
        case SET_VIDEO_SESSION_DATA : {
            return {
                ...state,
                ...action.payload
            }
        }
        default : {
            return state;
        }
    }
}

export default VideoSessionDataReducer;