import React from "react";
import { Button, FormGroup, Input } from "reactstrap";
import { NotificationManager } from "react-notifications";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { sendAppLink } from "../store/action";

class GetAppLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contact_number: "",
      errorType: "",
      errorText: "",
    };
  }

  handleInput = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
      errorType: "",
      errorText: "",
    });
  };
  sendAppLink = (e) => {
    e.preventDefault();
    const { contact_number } = this.state;
    const { sendAppLink } = this.props;

    // const obj = {
    //   phone: contact_number,
    // };
    let formDataPhone = new FormData(); //formdata object
    formDataPhone.append("phone", contact_number);
    if (contact_number === "") {
      this.setState({
        errorType: "contact_number",
        errorText: <span className="text-danger">Phone number is empty</span>,
      });
      return;
    } else if (contact_number.length < 10 || contact_number.length > 10) {
      this.setState({
        errorType: "contact_number",
        errorText: (
          <span className="text-danger">
            <b>Phone number should be of length 10</b>
          </span>
        ),
      });
      return;
    } else if (contact_number !== "") {
      let filter = /^\d{10}$/;
      if (!filter.test(contact_number)) {
        this.setState({
          errorType: "contact_number",
          errorText: (
            <span className="text-danger">
              <b>Please enter valid phone number</b>
            </span>
          ),
        });
        return;
      }
    }

    sendAppLink("sendAppLink", formDataPhone, (value) => {
      if (value === 201) {
        NotificationManager.success("Link sent successfully");
        this.setState({
          contact_number: "",
        });
      }
    });
  };
  render() {
    const { contact_number, errorText, errorType } = this.state;
    return (
      <div className="get-app-link-wrapper mt-4">
        <p className="mb-2">Get the link to download the app</p>
        <div className="d-table d-lg-block mx-auto">
          <div className="d-sm-flex text-center">
            <FormGroup className="get-app-input mb-sm-0">
              <div className="country-code">+91</div>
              <Input
                type="text"
                placeholder="Enter phone number"
                name="contact_number"
                onChange={this.handleInput}
                value={contact_number}
              />
            </FormGroup>

            <Button
              color="primary"
              className="send-app-link"
              onClick={this.sendAppLink}
            >
              Send app link
            </Button>
          </div>
        </div>
        {errorType && errorType === "contact_number" && errorText}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      sendAppLink,
    },
    dispatch
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(GetAppLink)
);
