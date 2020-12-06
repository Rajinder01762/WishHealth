import React from "react";
import { Container, Row, Col } from "reactstrap";
import Mask from "../../../assets/images/mask.png";
import Arrow from "../../../assets/images/icons/arrow.png";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { fetchServicesData } from "./store/action";
import Slider from "react-slick";
import { titleCase } from "../../../common/stringFunction";
import { oldWebsiteUrl } from "../../../common/oldWebsiteUrl";
class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [],
      finalArr: [],
      seeAll: false,
    };
  }
  componentDidMount() {
    const { fetchServicesData } = this.props;
    fetchServicesData("services", (value) => {
      let arr = value.splice(0, 12);
      this.setState({ services: value, finalArr: arr });
    });
  }
  handleSeeAll = () => {
    this.setState({
      seeAll: true,
      finalArr: this.state.services,
    });
  };
  render() {
    const { finalArr } = this.state;

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      rows: 3,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            centerPadding: "40px",
            centerMode: true,
          },
        },
        {
          breakpoint: 460,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            centerPadding: "10px",
            centerMode: true,
          },
        },
      ],
    };
    return (
      <section className="services-we-provide">
        <Container>
          <h2 className="title text-center font-weight-black">
            Services we provide
          </h2>
        </Container>
        <Container fluid="xl">
          <Row className="text-center d-none d-lg-flex align-items-center services-list justify-content-between">
            {finalArr &&
              finalArr.length > 0 &&
              finalArr.map((service, index) => {
                let match = /[&/\\#, +()$~%.'":*?<>{}]/g.exec(service.name);
                let finalName = service.name;
                if (match) {
                  finalName = service.name.substr(0, match.index).trim();
                  if (!finalName) {
                    finalName = service.name
                      .substr(match.index + 1, service.name.length)
                      .trim();
                    match = /[&/\\#, +()$~%.'":*?<>{}]/g.exec(finalName);
                    if (match) {
                      finalName = finalName.substr(0, match.index);
                    }
                  }
                }
                const serviceImage = service.image.split("/");
                let service_image = serviceImage.includes("services")
                  ? service.image
                  : Mask;
                return (
                  <Col key={index}>
                    <div
                      key={index}
                      className="text-center"
                      onClick={() => {
                        window.location.href = `${oldWebsiteUrl}index.php/patient/searchDoctorsMain/${service.name}`;
                      }}
                    >
                      <div className="services-img">
                        <img
                          style={{ cursor: "pointer" }}
                          width="113px"
                          height="113px"
                          src={service_image}
                          alt=""
                        />
                      </div>
                      <p title={titleCase(service.name)}>
                        {titleCase(service.name)}
                      </p>
                    </div>
                  </Col>
                );
              })}
            {/* <Col>
              <div className="see-all" onClick={this.handleSeeAll}>
                <div className="see-all-img">
                  <img src={Arrow} alt="" />
                </div>
                <p>See All</p>
              </div>
            </Col> */}
          </Row>
          <div className="serviceSlider d-lg-none">
            <Slider {...settings}>
              {finalArr &&
                finalArr.length > 0 &&
                finalArr.map((service, index) => {
                  let match = /[&/\\#, +()$~%.'":*?<>{}]/g.exec(service.name);
                  let finalName = service.name;
                  if (match) {
                    finalName = service.name.substr(0, match.index).trim();
                    if (!finalName) {
                      finalName = service.name
                        .substr(match.index + 1, service.name.length)
                        .trim();
                      match = /[&/\\#, +()$~%.'":*?<>{}]/g.exec(finalName);
                      if (match) {
                        finalName = finalName.substr(0, match.index);
                      }
                    }
                  }
                  const serviceImage = service.image.split("/");
                  let service_image = serviceImage.includes("services")
                    ? service.image
                    : Mask;
                  return (
                    <div key={index}>
                      <div
                        key={index}
                        className="text-center"
                        onClick={() => {
                          window.location.href = `${oldWebsiteUrl}index.php/patient/searchDoctorsMain/${service.name}`;
                        }}
                      >
                        <div className="services-img">
                          <img
                            style={{ cursor: "pointer" }}
                            width="113px"
                            height="113px"
                            src={service_image}
                            alt=""
                          />
                        </div>
                        <p title={titleCase(service.name)}>
                          {titleCase(service.name)}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </Slider>
          </div>
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
      fetchServicesData,
    },
    dispatch
  );
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Services)
);
