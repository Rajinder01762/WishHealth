import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import Slider from "react-slick";
import {
  fetchBlogsData,
  fetchMedicalShotsData,
  fetchHealthTipsData,
} from "./store/action";
import { setVideoPlayOption } from "../HealthIssues/store/action";
import cx from "classnames";
import { Media, Player, utils, withMediaProps } from "react-media-player";

const { keyboardControls } = utils;

class BlogsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      // medicalShots: [],
      medicalShots: [],
      healthTips: [],
      activeVideoIndex: null,
      medicalHealth: [],
    };
    this.videoElRef = [];
  }

  componentDidMount() {
    const {
      fetchBlogsData,
      fetchHealthTipsData,
      fetchMedicalShotsData,
    } = this.props;

    let formDatafeatureBlogs = new FormData(); //formdata object
    formDatafeatureBlogs.append("category", 172);
    fetchBlogsData("featuredBlogs", formDatafeatureBlogs, (value) => {
      this.setState({ blogs: value });
    });

    let formDataHealthTips = new FormData(); //formdata object
    formDataHealthTips.append("category", 173);
    fetchHealthTipsData("featuredBlogs", formDataHealthTips, (value) => {
      this.setState({ healthTips: value });
    });
    // let formDataMedicalShots = new FormData(); //formdata object
    // formDataMedicalShots.append("category", 1);
    // fetchMedicalShotsData("videos", formDataMedicalShots, (value) => {
    //   this.setState({ medicalShots: value });
    // });
    // let formDataMedicalShots = new FormData(); //formdata object
    // formDataMedicalShots.append("category", 1);
    fetchMedicalShotsData("medicalshots", (value) => {
      let medicalShotsArray = Object.values(value);

      this.setState({ medicalShots: medicalShotsArray });
    });
  }
  playVideo = (index, media) => {
    const { mediaProps, activeVideoIndex } = this.state;
    const { setVideoPlayOption, HealthIssuesData } = this.props;

    var size = Object.keys(HealthIssuesData.currentVideoData).length;
    if (
      HealthIssuesData &&
      size > 0 &&
      (activeVideoIndex !== index ||
        HealthIssuesData.videoType !== "medicalShots")
    ) {
      HealthIssuesData.currentVideoData.pause();
    }
    setVideoPlayOption("medicalShots", media);
    this.setState({
      activeVideoIndex: index,
      // mediaProps: media,
    });
  };
  pauseVideo = () => {
    const { activeVideoIndex } = this.state;
    const { HealthIssuesData } = this.props;
    this.setState({
      [`video${activeVideoIndex}`]: false,
    });
    var size = Object.keys(HealthIssuesData.currentVideoData).length;
    if (
      HealthIssuesData &&
      size > 0 &&
      HealthIssuesData.videoType === "medicalShots"
    ) {
      HealthIssuesData.currentVideoData.pause();
    }
  };
  handleVideoSlide = (media) => {
    this.setState({
      activeMedia: media,
    });

    media && media.playPause();
  };
  render() {
    const { blogs, medicalShots, healthTips } = this.state;

    let medicalHealth = [...medicalShots, ...healthTips];

    let finalArr;

    // let arr = ["Blogs", "Health Tips", "Medical Shots"];
    let arr = ["Blogs", "Health Tips / Medical Shots"];
    let arrCount = 0;
    if (blogs.length > 0) {
      arrCount += 1;
    }
    if (medicalShots.length > 0) {
      arrCount += 1;
    }
    if (healthTips.length > 0) {
      arrCount += 1;
    }

    const settingsMulti = {
      arrows: true,
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "45px",
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "45px",
          },
        },
        {
          breakpoint: 460,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "45px",
          },
        },
      ],
    };

    return (
      <section id="blog" className="health-issues-wrapper pt-0">
        <Container>
          <Row className="justify-content-center health-advise-row">
            {arr &&
              arr.map((item, index) => {
                // finalArr = [
                //   ...(item === "Blogs"
                //     ? blogs
                //     : item === "Medical Shots"
                //     ? medicalShots
                //     : healthTips),
                // ];
                finalArr = [...(item === "Blogs" ? blogs : medicalHealth)];

                const settings = {
                  arrows: true,
                  dots: false,
                  infinite: true,
                  speed: 500,
                  slidesToShow:
                    finalArr && finalArr.length < 3 ? finalArr.length : 3,
                  slidesToScroll:
                    finalArr && finalArr.length < 3 ? finalArr.length : 3,
                  responsive: [
                    {
                      breakpoint: 1200,
                      settings: {
                        slidesToShow:
                          finalArr && finalArr.length < 2 ? finalArr.length : 2,
                        slidesToScroll:
                          finalArr && finalArr.length < 2 ? finalArr.length : 2,
                      },
                    },
                    {
                      breakpoint: 767,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        className: "center",
                        centerMode: true,
                        infinite: true,
                        centerPadding: "60px",
                      },
                    },
                    {
                      breakpoint: 460,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        className: "center",
                        centerMode: true,
                        infinite: true,
                        centerPadding: "45px",
                      },
                    },
                  ],
                };
                if (finalArr && finalArr.length > 0) {
                  const colProps = {
                    md: arrCount > 1 ? 6 : 12,
                    lg: arrCount === 3 ? 6 : arrCount === 2 ? 6 : 12,
                  };
                  return (
                    <Col key={index} {...colProps}>
                      <div className="health-advise-wrap">
                        <div
                          className={cx("health-advise", {
                            "px-0 mb-3": arrCount > 1,
                          })}
                        >
                          <h2>{item}</h2>
                          <div
                            className={cx("health-advise-slider", {
                              arrowBottom: arrCount > 1,
                            })}
                          >
                            <Slider
                              {...(arrCount > 1 ? settingsMulti : settings)}
                              afterChange={this.pauseVideo}
                            >
                              {finalArr.map((data, index) => {
                                const {
                                  post_title,
                                  guid,
                                  image,
                                  link,
                                  title,
                                  id,
                                  ID,
                                  video,
                                } = data;

                                const Id = ID || id;
                                const placeholderimage =
                                  "https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg";
                                return (
                                  <div
                                    className="px-1 px-sm-2 px-md-3"
                                    key={index}
                                  >
                                    {data && image ? (
                                      <div className="health-img">
                                        <img
                                          src={
                                            (image && image.guid) ||
                                            placeholderimage
                                          }
                                          style={{ cursor: "pointer" }}
                                          onClick={() => {
                                            window.location.href = guid;
                                          }}
                                          alt=""
                                        />
                                        <p
                                          className="mb-0"
                                          title={post_title || title}
                                        >
                                          {post_title || title}
                                        </p>
                                      </div>
                                    ) : data && video ? (
                                      <div className="video-shots-wrap">
                                        <Media>
                                          {(mediaProps) => (
                                            <div
                                              className="media w-100"
                                              onKeyDown={keyboardControls.bind(
                                                null,
                                                mediaProps
                                              )}
                                            >
                                              <Player
                                                src={link}
                                                className="media-player w-100"
                                                isPlaying={
                                                  this.state[`video${Id}`] !==
                                                  undefined
                                                    ? this.state[`video${Id}`]
                                                    : false
                                                }
                                                onPlay={() =>
                                                  this.playVideo(Id, mediaProps)
                                                }
                                              />

                                              <div
                                                className="media-controls"
                                                onClick={() =>
                                                  this.handleVideoSlide(
                                                    mediaProps
                                                  )
                                                }
                                              ></div>
                                            </div>
                                          )}
                                        </Media>
                                        <p>{title}</p>
                                      </div>
                                    ) : null}
                                  </div>
                                );
                              })}
                            </Slider>
                          </div>
                        </div>
                      </div>
                    </Col>
                  );
                }
                return null;
              })}
          </Row>
        </Container>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    HealthIssuesData: state.HealthIssues,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchBlogsData,
      fetchHealthTipsData,
      fetchMedicalShotsData,
      setVideoPlayOption,
    },
    dispatch
  );
};

export default withMediaProps(
  withRouter(connect(mapStateToProps, mapDispatchToProps)(BlogsSection))
);
