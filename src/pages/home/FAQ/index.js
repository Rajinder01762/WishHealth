import React, { Component } from "react";
import { Container, Button } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import CollapseFaq from "./collapseFaq";
import { fetchFAQS } from "./store/action";

class FAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faqData: [],
      likeBit: false,
      disLikeBit: false,
    };
  }
  componentDidMount() {
    const { fetchFAQS } = this.props;
    fetchFAQS("faqs", (value) => {
      this.setState({ faqData: value });
    });
  }
  like = () => {
    const { likeBit } = this.state;
    this.setState({
      likeBit: !likeBit,
      disLikeBit: likeBit,
    });
  };

  render() {
    const { faqData, likeBit, disLikeBit } = this.state;

    return (
      <section className="wishhealth-faq">
        <Container>
          <h2 className="title text-center font-weight-black">
            Frequently asked questions
          </h2>
          <CollapseFaq questions={faqData} />
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
      fetchFAQS,
    },
    dispatch
  );
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FAQ));
