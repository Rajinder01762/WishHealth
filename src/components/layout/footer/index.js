import React from "react";
import { Container, Row, Col } from "reactstrap";

import Logo from "../../../assets/images/logo.png";
import Fb from "../../../assets/images/icons/fb.png";
import Twitter from "../../../assets/images/icons/twitter.png";
import GooglePlus from "../../../assets/images/icons/googlePlus.png";
import { oldWebsiteUrl } from "../../../common/oldWebsiteUrl";
const Contact = () => (
  <>
    <h4>Contact Us</h4>
    <p className="mb-2">+91 172 4730099</p>
    <p className="mb-2">+91 7733991188</p>
    <p className="mb-2">info@wishhealth.in</p>

    <div className="pt-2">
      <img
        style={{ cursor: "pointer" }}
        src={Fb}
        className="mr-2"
        onClick={() => {
          window.location.href = "https://www.facebook.com/WishHealthIndia/";
        }}
        alt=""
      />
      <img
        style={{ cursor: "pointer" }}
        src={Twitter}
        className="mr-2"
        onClick={() => {
          window.location.href = "https://www.twitter.com/wishhealthindia/";
        }}
        alt=""
      />
      <img
        style={{ cursor: "pointer" }}
        src={GooglePlus}
        className="mr-2"
        onClick={() => {
          window.location.href = "https://plus.google.com/+WishHealthPvtLtd/";
        }}
        alt=""
      />
    </div>
  </>
);
export default () => (
  <footer id="footer">
    <div className="footer-top">
      <Container>
        <Row>
          <Col
            xl={3}
            className="d-flex align-items-center justify-content-center mb-4 mb-xl-0"
          >
            <div>
              <img src={Logo} alt="" />
            </div>
          </Col>

          <Col lg={12} xl={9}>
            <Row className="linkRow">
              <Col xs={6} md={3} xl={4} className="linkCol">
                <div className="pl-lg-5 ">
                  <h4>Company</h4>
                  <ul className="pl-0">
                    <li>
                      {/* <a href="https://uat.wishhealth.in/index/about_us"> */}
                      <a href="https://uat.wishhealth.in/index/about_us">
                        About us
                      </a>
                    </li>

                    <li>
                      <a href="/#blog">Blog</a>
                    </li>
                  </ul>
                </div>
              </Col>

              <Col
                xs={12}
                md={5}
                xl={4}
                className="text-center text-md-left addressCol"
              >
                <h4>Address</h4>
                <p>
                  IT C-2 Dibon Building - 4th Floor, Sector 67, Sahibzada Ajit
                  Singh Nagar, Chandigarh, India. Pin:160002
                </p>
              </Col>
              <Col xs={6} md={4} lg={4} className="contactCol">
                <Contact />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="footer-bottom text-center">
      <Container>
        <Row>
          <Col sm={12}>
            <div className="copyright-text">
              <p className="mb-0">
                Copyright 2020{" "}
                <a href="https://uat.wishhealth.in/">Wish Health</a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </footer>
);
