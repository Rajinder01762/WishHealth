import React from "react";
import { Container } from "reactstrap";
import Point from "../../../assets/images/profile/points.png";
import Tick from "../../../assets/images/profile/tick.png";
const specialities = [
  { name: "Braces Treatment" },
  { name: "Dental Implants" },
  { name: "All Dental Treatments and Cosmetic Dentistry" },
  { name: "Dentures Flexible and Acrylic" },
];
const services = [
  {
    service:
      "Dental Implants, Dentures, RCT, Crown and Bridges, Surgical extractions, Flap Procedures.",
  },
  {
    service:
      "Braces Treatments, Dental Implants, Single setting Root Implant, Crown and Bridge Procedure, Bleaching, Veneering, Kids preventive and Conservatives Treatments, Painless Extraction of Teeth, Gums Treatment , Complete fixed and Removable Denture, Singl",
  },
];
export default () => (
  <div>
    <Container>
      <div className="specialities-wrap">
        <h2>Specialities</h2>
        <div className="specialties-content">
          {specialities.map(({ name }, index) => (
            <div className="name" key={index}>
              <span>
                <img src={Tick} alt="tick" />
                {name}
              </span>
            </div>
          ))}
        </div>
        <h2>Services</h2>
        <div className="list mt-sm-4 pt-2">
          {services.map(({ service }, index) => (
            <p key={index}>
              <img src={Point} alt="arrow" />
              {service}
            </p>
          ))}
        </div>
      </div>
    </Container>
  </div>
);
