import React, { Component } from "react";
import { Container, Button } from "reactstrap";
import Slider from "react-slick";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter, Link } from "react-router-dom";

// import Loader from "../../../loader/index";
import startIcon from "../../../assets/images/icons/starRatin.png";
import Avatar from "../../../assets/images/avatar.png";
import { fetchBookDoctorsData } from "./store/action";
import { oldWebsiteUrl } from "../../../common/oldWebsiteUrl";
const Card = (props) => {
  const { doctorsDetails, doctorsSpecialities } = props;

  // let doctorsSpeciality = doctorsSpecialities.map((item) => {
  //   return item.title;
  // });
  // let city = doctorsDetails.city.split(",");

  // let doctorsService = doctorsServices.map((item) => {
  //   return item.name;
  // });
  // let doctorDegree = doctorsDetails.doctorDegrees.map((item) => {
  //   return item.degree;
  // });
  // let doctorData = doctorsDetails.degree
  //   ? doctorsSpeciality && doctorsSpeciality.length > 0
  //     ? `${doctorsDetails.degree},`
  //     : `${doctorsDetails.degree}`
  //   : "";
  // doctorData +=
  //   doctorsSpeciality && doctorsSpeciality.length > 0
  //     ? doctorsService && doctorsService.length > 0
  //       ? `${doctorsSpeciality.join(",")},`
  //       : `${doctorsSpeciality.join(",")}`
  //     : "";
  // doctorData +=
  //   doctorsService && doctorsService.length > 0
  //     ? `${doctorsService.join(",")}`
  //     : "";
  // let doctorData = doctorsDetails.degree
  //   ? doctorDegree && doctorDegree.length > 0
  //     ? `${doctorsDetails.degree},`
  //     : `${doctorsDetails.degree}`
  //   : "";
  // doctorData +=
  // doctorDegree && doctorDegree.length > 0
  //     ? doctorsService && doctorsService.length > 0
  //       ? `${doctorsSpeciality.join(",")},`
  //       : `${doctorsSpeciality.join(",")}`
  //     : "";
  // doctorData +=
  //   doctorDegree && doctorDegree.length > 0 ? `${doctorDegree.join(",")}` : "";

  let profileImage = doctorsDetails.profile_pic
    ? doctorsDetails.profile_pic
    : Avatar;
  const Verified = () => (
    <>
      <span className="verified">
        <i className="fas fa-certificate"></i>
        <i className="fas fa-check"></i>
        <div>
          <div className="fade show">
            <div
              className="tooltip show bs-tooltip-auto"
              x-placement="right"
              x-out-of-boundaries="true"
            >
              <div
                className="tooltip-inner"
                role="tooltip"
                style={{ whiteSpace: "nowrap" }}
              >
                Verified
              </div>
              <span className="arrow" style={{ top: 8 }}></span>
            </div>
          </div>
        </div>
      </span>
    </>
  );

  return (
    <div className="doc-card-wrapper">
      <div className="doc-card">
        <div className="imgWrapper">
          <div className="holder">
            <img src={profileImage} alt={doctorsDetails.name} />
            {doctorsDetails && doctorsDetails.is_verified === "0" && (
              <Verified />
            )}
          </div>
        </div>
        <div className="content">
          <div className="text-content">
            <div className="c-title">
              <h5>
                {doctorsDetails.prefix} {doctorsDetails.name}
              </h5>
              <p className="rating">
                <img src={startIcon} alt="reting" />
                {doctorsDetails.rating}&nbsp;
                <span>{`(${doctorsDetails.profile_view_count})`}</span>
              </p>
            </div>

            {doctorsSpecialities && (
              <p className="text">
                {doctorsSpecialities &&
                  doctorsSpecialities[0] &&
                  doctorsSpecialities[0].title}
              </p>
            )}
            {doctorsDetails.city && (
              <p className="text">
                <i className="fas fa-map-marker-alt mr-2" />
                {doctorsDetails.city}
              </p>
            )}
            {doctorsDetails.experience && (
              <p className="text">
                <i className="fas fa-trophy mr-2" />

                {`${doctorsDetails.experience} years`}
              </p>
            )}
            {doctorsDetails.doc_fees && (
              <p className="text">
                <i className="fas fa-rupee-sign mr-2" />
                {doctorsDetails.doc_fees}
              </p>
            )}
          </div>

          <div className="text-center">
            <Link to="/doctor-profile">
              <Button
                color="link"
                className="view-btn mb-2"

                // onClick={() => {
                //   window.location.href =

                //     `${oldWebsiteUrl}doctor/doctorProfile/${doctorsDetails.user_id}`;
                // }}
              >
                View Profile
              </Button>
            </Link>

            <Button
              color="primary"
              className="w-100"
              onClick={() => {
                window.location.href = `${oldWebsiteUrl}doctor/doctorProfile/${doctorsDetails.user_id}`;
              }}
            >
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },

    {
      breakpoint: 416,
      settings: {
        // className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        speed: 500,
      },
    },
    {
      breakpoint: 374,
      settings: {
        // className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "50px",
        slidesToShow: 1,
        speed: 500,
      },
    },

    // {
    //   breakpoint: 374,
    //   settings: {
    //     slidesToShow: 1,
    //     slidesToScroll: 2,
    //     infinite: true,
    //   },
    // },
  ],
};
class BookOurDoctors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: [],
    };
  }
  componentDidMount() {
    let formDataDoctors = new FormData(); //formdata object
    formDataDoctors.append("doctorParams", "");
    formDataDoctors.append("location", "");
    formDataDoctors.append("offset", 0);
    formDataDoctors.append("limit", 30);
    const { fetchBookDoctorsData } = this.props;
    fetchBookDoctorsData("searchDoctors", formDataDoctors, (doctors) =>
      this.setState({ doctors })
    );
    // apiCallPost("searchDoctors", formDataDoctors).then((result) => {
    //   if (result.status === 201) {
    //     this.setState({
    //       doctors: result.data,
    //     });
    //   }
    // });
  }
  handlePaging = (currentSlide) => {
    const { doctors } = this.state;
    const { fetchBookDoctorsData } = this.props;
    if (currentSlide > doctors.length - 10) {
      let formDataDoctors = new FormData(); //formdata object
      formDataDoctors.append("doctorParams", "");
      formDataDoctors.append("location", "");
      formDataDoctors.append("offset", doctors.length);
      formDataDoctors.append("limit", doctors.length + 30);
      const { fetchBookDoctorsData } = this.props;
      fetchBookDoctorsData("searchDoctors", formDataDoctors, (result) => {
        if (result) {
          const temp = [...doctors];
          const newRecord = result.data;

          this.setState({
            doctors: [...temp, ...newRecord],
          });
        }
      });

      // apiCallPost("searchDoctors", formDataDoctors).then((result) => {
      //   if (result.status === 201) {
      //     const temp = [...doctors];
      //     const newRecord = result.data;

      //     this.setState({
      //       doctors: [...temp, ...newRecord],
      //     });
      //   }
      // });
    }
  };
  render() {
    const { doctors } = this.state;

    return (
      <section className="book-our-doctor">
        <Container>
          <h2 className="text-center title">Book Our Doctors</h2>
          <div className="doc-slider-wrapper">
            <Slider
              className="doc-slider pt-sm-4"
              {...settings}
              afterChange={this.handlePaging}
            >
              {doctors &&
                doctors.length > 0 &&
                doctors.map((data, index) => <Card key={index} {...data} />)}
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
      fetchBookDoctorsData,
    },
    dispatch
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BookOurDoctors)
);
