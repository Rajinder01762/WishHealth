import React, { useState } from "react";
import { Container } from "reactstrap";
import cx from "classnames";
import { SearchDoctorForm } from "../../form";
import doctorImage from "../../../assets/images/doctor.png";
import videoConsulIcon from "../../../assets/images/icons/videoConsultation.png";
import clinicConsulIcon from "../../../assets/images/icons/clinicConsultation.png";
import liveConsulIcon from "../../../assets/images/icons/consultLiveDoctors.png";
import BlueArrow from "../../../assets/images/consultArrow.svg";
import Loader from "../../../loader/index";
import { oldWebsiteUrl } from "../../../common/oldWebsiteUrl";
const consult = [
  {
    id: 1,
    icon: videoConsulIcon,
    iconClassName: "video",
    name: "Video Consultation",
  },
  {
    id: 2,
    icon: clinicConsulIcon,
    iconClassName: "clinic",
    name: "Clinic Consultation",
  },
  {
    id: 3,
    icon: liveConsulIcon,
    iconClassName: "consultLive",
    name: "Consult live Doctor now",
    isLive: true,
  },
];
const TitleHeader = ({ className = "" }) => (
  <div className={cx("titleHeader", className)}>
    <h1 className="title">Search and consult doctors anywhere anytime</h1>
  </div>
);

const HomeBanner = () => {
  const [isLoading, setIsLoading] = useState(0);
  const icons = (id) => {
    setIsLoading(id);
    if (id === 1 || id === 3) {
      window.location.href =
        // "https://uat.wishhealth.in/patient/searchDoctorsMain";
        `${oldWebsiteUrl}patient/searchDoctorsMain/video`;
      // setIsLoading(id);
    } else {
      window.location.href =
        // "https://uat.wishhealth.in/patient/searchDoctorsMain";
        `${oldWebsiteUrl}patient/searchDoctorsMain/clinic`;
      // setIsLoading(id);
    }
  };
  return (
    <section className="homeBanner">
      <Container className="containerWrapper position-relative">
        <SearchDoctorForm />
        <TitleHeader className="d-md-none text-center" />
        <div className="homeBannerContent">
          <TitleHeader className="d-none d-md-block" />
          <div className="consults">
            {consult.map(
              ({ id, name, icon, iconClassName, isLive = false }) => {
                return (
                  <div
                    key={id}
                    className="consult position-relative"
                    // onClick={() => {
                    //   window.location.href =
                    //     "https://wishhealth.in/patient/searchDoctorsMain";
                    // }}
                    onClick={() => icons(id)}
                  >
                    {id === isLoading && (
                      <div className="location-loader">
                        <Loader />
                      </div>
                    )}
                    <div className="content">
                      <div className="icon bg-primary d-flex align-items-center justify-content-center mb-md-5 mb-2 mb-sm-4">
                        <img src={icon} alt={name} className={iconClassName} />
                      </div>
                      <div className="consult-name">
                        <p className="name">{name}</p>
                        <button className="arrow">
                          <img src={BlueArrow} alt="" />
                        </button>
                      </div>

                      {isLive && (
                        <p className="isLive bg-danger text-white">Live</p>
                      )}
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
        <img className="d-img d-none d-sm-block" src={doctorImage} alt="" />
      </Container>
    </section>
  );
};

export default HomeBanner;
