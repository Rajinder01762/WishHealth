import React, { Component } from "react";
import { Button } from "reactstrap";
import Mute from "../../../assets/images/mute.svg";
import Unmute from "../../../assets/images/unmute.svg";
import EndCall from "../../../assets/images/end-call.svg";
import VideoIcon from "../../../assets/images/video.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVideoSessionData } from "./store/action ";

const CallScreen = (props) => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    function videoType(type) {
        const session = state.VideoSessionData.session;
        const size = Object.keys(session).length;
        if(size){
            if(type === 'mute'){
                session.unmute('video');
            dispatch(setVideoSessionData({videoType : 'unmute'}));
            }
            else{
                session.mute('video');
            dispatch(setVideoSessionData({videoType : 'mute'}));
            }
        }
    }

     function audioType(type) {
        const session = state.VideoSessionData.session;
        const size = Object.keys(session).length;
        if(size){
            if(type === 'mute'){
                session.unmute('audio');
            dispatch(setVideoSessionData({audioType : 'unmute'}));
            }
            else{
                session.mute('audio');
            dispatch(setVideoSessionData({audioType : 'mute'}));
            }
        }
    }
    function onEndCall(){
        const session = state.VideoSessionData.session;
        const size = Object.keys(session).length;
        var extension = {};
        if(size){
            session.stop(extension);
            console.log('End Call');
        }
    }
    const audio = state.VideoSessionData.audioType;
    const video = state.VideoSessionData.videoType;
    const session = state.VideoSessionData.session;
    const size = Object.keys(session).length;
        return( 
        <div>
            <video width="100%" height="300" autoplay playsinline id="testVideo">
            </video>
            {size > 0 && <div className="video-buttons">          
            <button onClick={() => { videoType(video) }}><img src={VideoIcon} /></button>
            <button className="endCall" onClick={() => {onEndCall()}}><img src={EndCall} /></button>
            <button onClick={() => audioType(audio)}><img src={audio === 'mute' ? Mute : Unmute} /></button>
            </div>}
            {/* <Button>Switch Camera</Button> */}
        </div>)
}
export default CallScreen;