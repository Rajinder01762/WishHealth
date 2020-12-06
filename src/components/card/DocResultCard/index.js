// import React, { useEffect, useState } from "react";
// import { Button } from "reactstrap";
// import DoctorImage from "../../../assets/images/dr1.png";
// import startIcon from "../../../assets/images/icons/starRatin.png";
// import VideoConsultation from "../../../assets/images/search/videoConsulation.png";
// import ClinicConsultation from "../../../assets/images/search/clinicConsultation.png";
// import CallNow from "../../../assets/images/search/callNow.png";
// import Location from "../../../assets/images/search/drLoaction.png";
// import Experience from "../../../assets/images/search/experience.png";
// import Language from "../../../assets/images/search/language.png";
// import ClinicFee from "../../../assets/images/search/clinicFee.png";
// import Verified from "../../../assets/images/search/verified.png";
// import QBConfig from '../../../QBConfig';
// import CallScreen from "./CallScreen";
// import { useDispatch, useSelector } from "react-redux";
// import { setVideoSessionData } from "./store/action ";


// const DocResultCard = (props) => {
//   const [stream,setStream]=useState({});
//   const [sessionData,setSession] = useState({});
//   const {} = props;

//   const dispatch = useDispatch();
//   const state = useSelector((state) => state);

//   useEffect(()=>{
//     setTimeout(() => {
//     const { QB } = window;
//     console.log(window.QB)
//     console.log(QB);
//     QB.init(QBConfig.appId, QBConfig.authKey, QBConfig.authSecret,QBConfig.CONFIG);
//     QB.createSession((err, result) =>{
//       console.log('Create Application Session Suuccessfully',result);
// const param = {
//   login: 'P_8306',
//   password: "quickblox"
// }
//       QB.createSession(param, function(err, result) {
//         // callback function
//         console.log('Login Successfull ', result);
//         var userCredentials = {
//           userId: result.user_id,
//           password: "quickblox"
//         };
        
//         QB.chat.connect(userCredentials, function(error, data) {
//           console.log('Chat Connected Successfully');

//           var calleesIds = [122088935]; // User's ids 
//           var sessionType = QB.webrtc.CallType.VIDEO; // AUDIO is also possible
//           var callerID = result.user_id; // Your user ID (optional, will be defined from chat connection)
//           var additionalOptions = {"bandwith": 512}; // The video bandwith (number, optional, 0 = unlimited)
          
//           var session = QB.webrtc.createNewSession(calleesIds, sessionType, callerID, additionalOptions);

//           console.log('session ',session);
//           if(session){
//             dispatch(setVideoSessionData({session}));
//             setSession(session);
//           }
//         })
//       });
//     });
//     }, 3000);
//   },[]);


//   const onVideoCall = (e) => {
//     const session = state.VideoSessionData.session;
//     console.log('Enter');
//     // const { session } = this.state;
//     // if(true){
//         var mediaParams = {
//               audio: true,
//               video: true,
//               elemId : 'testVideo',
//               options: {
//               muted: false,
//               mirror: true
//             },
//           };
          
//           session.getUserMedia(mediaParams, function(err, stream) {
//             if (err) {
//             } else {
//               console.log('stream',stream);
//             dispatch(setVideoSessionData({stream}));
//               session.attachMediaStream('testVideo', stream);
//             var extension = {};
//             session.call(extension, function(error) {
//               if(error){
//                 console.log('Session error ',error)
//               }
//               else {
//                 console.log('Call Sent')
//               }

//           });
//             }
//           });
//         // }

//   }

//   const session = state.VideoSessionData.stream;
//   const size = Object.keys(session).length;

//   return (
//     <div className="search-results">
//       <div className="content">
//         <div className="d-flex flex-column flex-sm-row ">
//           <img
//             src={DoctorImage}
//             className="doctor-image d-block mx-auto mx-sm-0 mb-3"
//           />
//           <div className="doctor-info">
//             <div className="doctor-name">
//               <h3 className="mb-0">Dr. Wishhealth</h3>
//               <div className="rating mb-0">
//                 <img src={startIcon} alt="reting" />
//                 <span className="count">
//                   4.5<span className="total ml-1">(90)</span>
//                 </span>
//               </div>
//             </div>
//             <p className="info">
//               Surgical Gastroenterology, Medical Gastroenterology
//             </p>
//             <div className="informations">
//               <p>
//                 <img src={Location} className="mr-2" />
//                 Dibon Building, Punjab{" "}
//               </p>
//               <p>
//                 <img src={Experience} className="mr-2" />
//                 Experience: 3 years
//               </p>
//               <p>
//                 <img src={ClinicFee} className="mr-2" />
//                 Contact clinic for fee
//               </p>
//               <p>
//                 <img src={Language} className="mr-2" />
//                 Language Known: English, Hindi and Punjabi
//               </p>
//               <p>
//                 <img src={Verified} className="mr-2" />
//                 Verified Doctor
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="mt-4 mx-auto contacts-buttons">
//         <Button color="themeBordered" onClick={onVideoCall}>
//           <img src={VideoConsultation} className="mr-2" />
//           Video Consultation
//         </Button> 
//         <Button color="bordered" className="call-now">
//           <img src={CallNow} className="mr-2" />
//           Call Now
//         </Button>
//         <Button color="themeBordered">
//           <img src={ClinicConsultation} className="mr-2" />
//           Clinic Consultation
//         </Button>
//       </div>
//      {<CallScreen/>}
//     </div>
//   );
// };

// export default DocResultCard;



import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import DoctorImage from "../../../assets/images/dr1.png";
import startIcon from "../../../assets/images/icons/starRatin.png";
import VideoConsultation from "../../../assets/images/search/videoConsulation.png";
import ClinicConsultation from "../../../assets/images/search/clinicConsultation.png";
import CallNow from "../../../assets/images/search/callNow.png";
import Location from "../../../assets/images/search/drLoaction.png";
import Experience from "../../../assets/images/search/experience.png";
import Language from "../../../assets/images/search/language.png";
import ClinicFee from "../../../assets/images/search/clinicFee.png";
import Verified from "../../../assets/images/search/verified.png";
import QBConfig from '../../../QBConfig';
import CallScreen from "./CallScreen";
import { useDispatch, useSelector } from "react-redux";
import { setVideoSessionData } from "./store/action ";
import { withRouter } from "react-router-dom";

const DocResultCard = (props) => {
  const [stream,setStream]=useState({});
  const {} = props;
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(()=>{
  });
  const onVideoCall = (e) => {
    console.log('Enter',props)
    const { history } = props;
    const { QB } = window;
    console.log(window)
    console.log(QB)
    QB.init(QBConfig.appId, QBConfig.authKey, QBConfig.authSecret,QBConfig.CONFIG);
    QB.createSession((err, result) =>{
      console.log('Create Application Session Suuccessfully',result);
      const param = {
        login: 'P_8306',
        password: "quickblox"
      }
      QB.createSession(param, function(err, result) {
        // callback function
        console.log('Login Successfull ', result);
        var userCredentials = {
          userId: result.user_id,
          password: "quickblox"
        };
        QB.chat.connect(userCredentials, function(error, data) {
          console.log('Connected Successfully');
          var calleesIds = [1220889351]; // User's ids 122088935
          var sessionType = QB.webrtc.CallType.VIDEO; // AUDIO is also possible
          var callerID = result.user_id; // Your user ID (optional, will be defined from chat connection)
          var additionalOptions = {"bandwith": 512}; // The video bandwith (number, optional, 0 = unlimited)
          var session = QB.webrtc.createNewSession(calleesIds, sessionType, callerID, additionalOptions);
          console.log('session ',session);
          dispatch(setVideoSessionData({session}));
           var mediaParams = {
              audio: true,
              video: true,
              elemId : 'testVideo',
              options: {
              muted: false,
              mirror: true
            },
          };
          session.getUserMedia(mediaParams, function(err, stream) {
            if (err) {
            } else {
            }
            console.log('stream',stream);
              session.attachMediaStream('testVideo', stream);
              dispatch(setVideoSessionData({stream}));
            var extension = {};
            session.call(extension, function(error) {
              if(error){
                console.log(error)
              }
              else {

                console.log('Call SentCall SentCall SentCall SentCall SentCall Sent')
              //   QB.webrtc.onCallListener = function(session, extension) {
              //     console.log('Incoming CallIncoming CallIncoming CallIncoming CallIncoming Call')
              // };
              }
          });
          });
        })
      });
    });
  }
  return (
    <div className="search-results">
      <div className="content">
        <div className="d-flex flex-column flex-sm-row ">
          <img
            src={DoctorImage}
            className="doctor-image d-block mx-auto mx-sm-0 mb-3"
          />
          <div className="doctor-info">
            <div className="doctor-name">
              <h3 className="mb-0">Dr. Wishhealth</h3>
              <div className="rating mb-0">
                <img src={startIcon} alt="reting" />
                <span className="count">
                  4.5<span className="total ml-1">(90)</span>
                </span>
              </div>
            </div>
            <p className="info">
              Surgical Gastroenterology, Medical Gastroenterology
            </p>
            <div className="informations">
              <p>
                <img src={Location} className="mr-2" />
                Dibon Building, Punjab{" "}
              </p>
              <p>
                <img src={Experience} className="mr-2" />
                Experience: 3 years
              </p>
              <p>
                <img src={ClinicFee} className="mr-2" />
                Contact clinic for fee
              </p>
              <p>
                <img src={Language} className="mr-2" />
                Language Known: English, Hindi and Punjabi
              </p>
              <p>
                <img src={Verified} className="mr-2" />
                Verified Doctor
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 mx-auto contacts-buttons">
        <Button color="themeBordered" onClick={onVideoCall}>
          <img src={VideoConsultation} className="mr-2" />
          Video Consultation
        </Button> 
        <Button color="bordered" className="call-now">
          <img src={CallNow} className="mr-2" />
          Call Now
        </Button>
        <Button color="themeBordered">
          <img src={ClinicConsultation} className="mr-2" />
          Clinic Consultation
        </Button>
      </div>
    </div>
  );
};
export default withRouter(DocResultCard);



