import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import ClinicName from "../../../assets/images/profile/clinicName.png";
import WrokingDays from "../../../assets/images/profile/wrokingDays.png";
import ClinicFees from "../../../assets/images/profile/clinicFees.png";
import Address from "../../../assets/images/profile/address.png";
import Timings from "../../../assets/images/profile/timings.png";
import Map from "../../../assets/images/profile/map.png";
import VideoConsultation from "../../../assets/images/search/videoConsulation.png";
import ClinicConsultation from "../../../assets/images/search/clinicConsultation.png";

export default () => (
  <div className="py-sm-5 py-3">
    <Container>
      <div className="clinic-details-wrapper">
        <h2> Clinic Details </h2>
        <div className="clinic-details d-lg-flex">
          <div>
            <Row className="pt-4">
              <Col md={6}>
                <div className="details-info">
                  <img src={ClinicName} />
                  <div className="px-3 mb-sm-4 mb-3">
                    <h4> Clinic Name: </h4> <p> VOHRA DENTAL CARE </p>
                  </div>
                </div>
                <div className="details-info">
                  <img src={WrokingDays} />
                  <div className="px-3 mb-sm-4 mb-3">
                    <h4> Days of Working: </h4>
                    <p>
                      Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
                    </p>
                  </div>
                </div>
                <div className="details-info">
                  <img src={ClinicFees} />
                  <div className="px-3 mb-sm-4 mb-3">
                    <h4> Clinic Fee: </h4>
                    <p> 400 Consultation fee at clinic </p>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="details-info">
                  <img src={Address} />
                  <div className="px-3 mb-sm-4 mb-3">
                    <h4> Address: </h4>
                    <p>
                      Vohra Dental care shop number 138 - 140 first floor,
                      bhatia bankets, sector 45 - c, chandigarh
                    </p>
                  </div>
                </div>
                <div className="details-info">
                  <img src={Timings} />
                  <div className="px-3 mb-sm-4 mb-3">
                    <h4> Timings: </h4> <p> 10: 00 am - 8: 00 pm </p>
                    <i> (Break Time: 1: 00 pm - 5: 00 pm) </i>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="map">
            <img src={Map} alt="map" />
          </div>
        </div>
        <div className="text-center py-3 py-sm-4">
          <Button color="themeBordered" className="mx-2">
            <img
              src={ClinicConsultation}
              className="mr-2"
              alt="ClinicConsultation"
            />
            Clinic Consultation
          </Button>
          <Button color="themeBordered" className="mx-2">
            <img
              src={VideoConsultation}
              className="mr-2"
              alt="VideoConsultation"
            />
            Video Consultation
          </Button>
        </div>
      </div>
    </Container>
  </div>
);
