import React from "react";
import {
  Container,
  Button,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

import { NotificationManager } from "react-notifications";
import CoverImage from "../../../assets/images/bottomBannerImage.png";
import { getInTouchApi } from "./store/action";

class GetInTouch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      message: "",
      errorType: "",
      errorText: "",
    };
  }
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      errorType: "",
      errorText: "",
    });
  };
  validateEmail = (email) => {
    var re = /^(([^<>()\]\\.,;:\s@“]+(\.[^<>()\]\\.,;:\s@“]+)*)|(“.+“))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(email).toLowerCase());
  };
  handleGetInTouch = () => {
    const { firstname, lastname, email, message } = this.state;
    if (firstname === "") {
      this.setState({
        errorType: "firstname",
        errorText: <span className="text-danger">First name is empty</span>,
      });
      return;
    }
    if (lastname === "") {
      this.setState({
        errorType: "lastname",
        errorText: <span className="text-danger">Last name is empty</span>,
      });
      return;
    }
    if (email === "") {
      this.setState({
        errorType: "email",
        errorText: (
          <span className="text-danger">
            <b>Email Id is empty</b>
          </span>
        ),
      });
      return;
    }
    if (!this.validateEmail(email)) {
      this.setState({
        errorType: "email",
        errorText: (
          <span className="text-danger">
            <b>Invalid email</b>
          </span>
        ),
      });
      return;
    }
    if (message === "") {
      this.setState({
        errorType: "message",
        errorText: <span className="text-danger">Message is empty</span>,
      });
      return;
    }
    this.sendEmail();
  };
  sendEmail = () => {
    const { firstname, lastname, email, message } = this.state;
    const { getInTouchApi } = this.props;
    const obj = {
      first_name: firstname,
      last_name: lastname,
      email,
      message,
    };

    getInTouchApi("getInTouch", obj, (result) => {
      if (result.status === 200) {
        NotificationManager.success("Form submitted successfully");
        this.setState({
          firstname: "",
          lastname: "",
          email: "",
          message: "",
        });
      }
    });
  };
  render() {
    const {
      firstname,
      lastname,
      errorText,
      errorType,
      email,
      message,
    } = this.state;
    return (
      <section className="get-in-touch" id="getintouch">
        <Container>
          <Row>
            <Col lg={6} className="px-0 pl-lg-3">
              <div className="contact-form">
                <div className="text-center text-sm-left">
                  <h2 className="title font-weight-black">Get in Touch</h2>
                  <p>
                    Wish health is a great platform for doctors and clients to
                    connect with each other.
                  </p>
                </div>
                <div className="forms">
                  <Row>
                    <Col sm={6}>
                      <FormGroup>
                        <Label for="exampleEmail">First Name</Label>
                        <Input
                          type="text"
                          placeholder="First Name"
                          name="firstname"
                          id="firstname"
                          value={firstname}
                          onChange={this.handleInput}
                        />
                        {errorType && errorType === "firstname" && errorText}
                      </FormGroup>
                    </Col>
                    <Col sm={6}>
                      <FormGroup>
                        <Label for="exampleEmail">Last Name</Label>
                        <Input
                          type="text"
                          placeholder="Last Name"
                          name="lastname"
                          id="lastname"
                          value={lastname}
                          onChange={this.handleInput}
                        />
                        {errorType && errorType === "lastname" && errorText}
                      </FormGroup>
                    </Col>
                    <Col sm={12}>
                      <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input
                          type="email"
                          name="email"
                          placeholder="Email"
                          onChange={this.handleInput}
                          value={email}
                        />
                        {errorType && errorType === "email" && errorText}
                      </FormGroup>
                    </Col>
                    <Col sm={12}>
                      <FormGroup>
                        <Label for="exampleText">Message</Label>
                        <Input
                          type="textarea"
                          name="message"
                          id="message"
                          onChange={this.handleInput}
                          value={message}
                        />
                        {errorType && errorType === "message" && errorText}
                      </FormGroup>
                    </Col>
                    <Col sm={12}>
                      <div className="mt-2 get-in-touchBtn">
                        <Button color="primary" onClick={this.handleGetInTouch}>
                          Get in touch
                        </Button>
                        <div className="mt-3 mt-md-0">
                          <p className="domain-info mb-0">
                            info@wishhealth.in{" "}
                          </p>
                          <a href="https://uat.wishhealth.in/">
                            www.wishhealth.in
                          </a>
                          {/* <p className="domain-info mb-0">www.wishhealth.in</p> */}
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>

            <img
              src={CoverImage}
              className="get-in-touch-cover d-none d-lg-block"
              alt=""
            />
          </Row>
        </Container>
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getInTouchApi,
    },
    dispatch
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(GetInTouch)
);
