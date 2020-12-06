QB.webrtc.onCallListener = function(session, extension) { 
    console.log('Incoming call')
}

QB.webrtc.onAcceptCallListener = function(session, userId, extension) {
    console.log('onaccpt call listner')
 }

QB.webrtc.onRejectCallListener = function(session, userId, extension) { }

QB.webrtc.onStopCallListener = function(session, userId, extension) { }

QB.webrtc.onUpdateCallListener = function(session, userId, extension) { }

QB.webrtc.onInvalidEventsListener = function(eventName, session, userId, userInfo) {}

QB.webrtc.onUserNotAnswerListener = function(session, userId) { }

QB.webrtc.onRemoteStreamListener = function(session, userId, stream) { }

QB.webrtc.onSessionConnectionStateChangedListener = function(session, userId, connectionState) { }

QB.webrtc.onSessionCloseListener = function(session) {}

QB.webrtc.onCallStatsReport = function(session, userId, stats, error) { }

