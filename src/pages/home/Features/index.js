import React from "react";
import { Container, Row, Col } from "reactstrap";
import Logo from "../../../assets/images/logo.png";
import Mobile from "../../../assets/images/mobile.png";
import Brand from "../../../assets/images/mac.svg";
import Playstore from "../../../assets/images/playstore.png";
import GetAppLink from "../../../components/form/GetAppLink";
import { fetchFeaturesData } from "./store/action";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
class Features extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      features: "",
    };
  }
  componentDidMount() {
    const { fetchFeaturesData } = this.props;

    fetchFeaturesData("page/110", (value) => {
      this.setState({ features: value });
      console.log("dkjkjdkjdkh", value);
    });
  }
  render() {
    const { features } = this.state;
    const content = features.replace(/(<([^>]+)>)/gi, "");
    console.log("contentcontentcontent", content);
    return (
      <section className="wishhealth-features pb-lg-0">
        <Container>
          <Row>
            <Col lg={4}>
              <div className="mobile-image mb-4 mb-lg-0">
                <img src={Mobile} className="img-fluid" alt="" />
              </div>
            </Col>
            <Col lg={8}>
              <div className="pl-lg-5 text-center text-lg-left">
                <div className="mb-4">
                  <img src={Logo} alt="" />
                </div>
                <div className="text">
                  <p>{content}</p>
                </div>

                <div className="mt-4 app-store-links-wrapper">
                  <a
                    href="https://play.google.com/store/apps/details?id=in.wishhealth.doc.android"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="app-store-link"
                  >
                    <div className="d-flex align-items-center">
                      <img src={Playstore} alt="" />
                      <div>
                        <p className="mb-0">Get it On</p>
                        <h4 className="mb-0">Google Play</h4>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://apps.apple.com/in/app/wishhealth-for-doctors/id1497794891"
                    className="app-store-link"
                  >
                    <div className="d-flex align-items-center">
                      <img src={Brand} alt="" />
                      <div>
                        <p className="mb-0">Available on the</p>
                        <h4 className="mb-0">App Store</h4>
                      </div>
                    </div>
                  </a>
                </div>
                <GetAppLink />
              </div>
            </Col>
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
      fetchFeaturesData,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Features);
