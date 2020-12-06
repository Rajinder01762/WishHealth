import React from "react";
import { Container, Button } from "reactstrap";
import ProfileImage from "../../../assets/images/dr3.png";
import VideoConsultation from "../../../assets/images/search/videoConsulation.png";
import ClinicConsultation from "../../../assets/images/search/clinicConsultation.png";
import CallNow from "../../../assets/images/search/callNow.png";
import Degree from "../../../assets/images/profile/degree.png";
import Speciality from "../../../assets/images/profile/speciality.png";
import Experience from "../../../assets/images/profile/experience.png";
import Language from "../../../assets/images/profile/language.png";

export default () => {
  const Image = () => (
    <div className="images">
      <img src={ProfileImage} />
    </div>
  );
  return (
    <div className="doctor-profile-wrapper">
      <div className="banner">
        <Container>
          <div className="doctor-profile">
            <div className="doctor-information">
              <div className="d-flex">
                <Image />
                <div className="doctor-details d-md-none">
                  <h3 className="d-md-none">Dr. Wishhealth</h3>
                  <div className="info">
                    <p>
                      <span
                        className="info-icon "
                        style={{ backgroundImage: `url(${Degree})` }}
                      ></span>
                      MBBS, BDS
                    </p>
                    <p>
                      <span
                        className="info-icon"
                        style={{ backgroundImage: `url(${Speciality})` }}
                      ></span>
                      Surgical Gastroenterology, Medical Gastroenterology
                    </p>
                    <p>
                      <span
                        className="info-icon"
                        style={{ backgroundImage: `url(${Experience})` }}
                      ></span>
                      Experience: 3 years
                    </p>
                    <p>
                      <span
                        className="info-icon"
                        style={{ backgroundImage: `url(${Language})` }}
                      ></span>
                      Language Known: English, Hindi and Punjabi
                    </p>
                  </div>
                </div>
              </div>
              <div className="content">
                <h2>About</h2>
                <p>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs. The passage
                  is attributed to an unknown typesetter in the 15th century who
                  is thought to have scrambled parts of Cicero's De Finibus
                  Bonorum et Malorum for use in a type specimen book. century
                  who is thought to have scrambled parts of Cicero's De Finibus
                  Bonorum et Malorum for use in a type specimen book.
                </p>
              </div>
            </div>
            <div className="doctor-details">
              <div className="doctor">
                <h3 className="d-md-block d-none">Dr. Wishhealth</h3>
                <div>
                  <Button color="themeBordered">
                    <img
                      src={ClinicConsultation}
                      className="mr-2"
                      alt="ClinicConsultation"
                    />
                    Clinic Consultation
                  </Button>
                  <Button color="bordered" className="call-now">
                    <img src={CallNow} className="mr-2" alt="CallNow" />
                    Call Now
                  </Button>
                  <Button color="themeBordered">
                    <img
                      src={VideoConsultation}
                      className="mr-2"
                      alt="VideoConsultation"
                    />
                    Video Consultation
                  </Button>
                </div>
              </div>
              <div className="info d-none d-md-block">
                <p>
                  <span
                    className="info-icon "
                    style={{ backgroundImage: `url(${Degree})` }}
                  ></span>
                  MBBS, BDS
                </p>
                <p>
                  <span
                    className="info-icon"
                    style={{ backgroundImage: `url(${Speciality})` }}
                  ></span>
                  Surgical Gastroenterology, Medical Gastroenterology
                </p>
                <p>
                  <span
                    className="info-icon"
                    style={{ backgroundImage: `url(${Experience})` }}
                  ></span>
                  Experience: 3 years
                </p>
                <p>
                  <span
                    className="info-icon"
                    style={{ backgroundImage: `url(${Language})` }}
                  ></span>
                  Language Known: English, Hindi and Punjabi
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
