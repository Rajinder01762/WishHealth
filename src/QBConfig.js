 export default {
    appId: '85060',
    authKey: 'Hu527uvYdY7GfyT',
    authSecret: 'a2EvU4g3E-cju3F',
    accountKey: 'Umh4krY_jy7aJwaMCNdN',
    apiEndpoint: '', // optional
    chatEndpoint: '', // optional
    CONFIG : {
    streamManagement: {
        enable: true
      }
    },
    webrtc: {
      answerTimeInterval: 60, // Max answer time after that the 'QB.webrtc.onUserNotAnswerListener' callback will be fired.
      dialingTimeInterval: 5,  // The interval between call requests produced by session.call(extension)
      disconnectTimeInterval: 30, // If an opponent lost a connection then after this time the caller will now about it via 'QB.webrtc.onSessionConnectionStateChangedListener' callback.
      statsReportTimeInterval: false,
       // Allows access to the statistical information about a peer connection. You can set amount of seconds you can get statistic information after.
    }
  };