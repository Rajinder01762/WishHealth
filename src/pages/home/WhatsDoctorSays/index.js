import React from "react";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

import { fetchTestimonialsData } from "./store/action";
import { Media, Player, utils, withMediaProps } from "react-media-player";
import { setVideoPlayOption } from "../HealthIssues/store/action";

const { keyboardControls } = utils;
const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: { adaptiveHeight: true },
    },
  ],
};

class Testimonials extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testimonials: [],
      play: false,
      activeVideoIndex: null,
    };
  }
  componentDidMount() {
    const { fetchTestimonialsData } = this.props;
    fetchTestimonialsData("testimonials", (value) =>
      this.setState({ testimonials: value })
    );
  }

  playVideo = (index, media) => {
    const { activeVideoIndex } = this.state;
    const { setVideoPlayOption, HealthIssuesData } = this.props;
    var size = Object.keys(HealthIssuesData.currentVideoData).length;
    if (
      HealthIssuesData &&
      size > 0 &&
      (activeVideoIndex !== index ||
        HealthIssuesData.videoType !== "testimonials")
    ) {
      HealthIssuesData.currentVideoData.pause();
    }
    setVideoPlayOption("testimonials", media);
    this.setState({
      activeVideoIndex: index,
      // mediaProps,
    });
  };

  pauseVideo = (currentVideo) => {
    const { activeVideoIndex } = this.state;
    const { HealthIssuesData } = this.props;
    this.setState({
      [`video${activeVideoIndex}`]: false,
    });
    var size = Object.keys(HealthIssuesData.currentVideoData).length;
    if (
      HealthIssuesData &&
      size > 0 &&
      HealthIssuesData.videoType === "testimonials"
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
    const { testimonials } = this.state;

    return (
      <div>
        <section className="wishhealth-doctors">
          <Container>
            <Row>
              <Col md={12}>
                <h2>What our doctor’s say</h2>
              </Col>
            </Row>
            <Slider
              className="px-0"
              {...settings}
              afterChange={this.pauseVideo}
            >
              {testimonials &&
                testimonials.length > 0 &&
                testimonials.map((item, index) => {
                  const content = item.content.replace(/(<([^>]+)>)/gi, "");
                  const splitarr = item.client_name.match(
                    /[^\s"]+|"([^"]*)"/gi
                  );
                  let designation = "";
                  splitarr.map((item, index) => {
                    if (item.match(/^"(.+(?="$))"$/)) {
                      designation = item;
                      splitarr.splice(index, 1);
                    }
                    return null;
                  });
                  let client_name = splitarr.join(" ");

                  return (
                    <div key={index}>
                      <Row className="mx-0">
                        <Col lg={5}>
                          {item.video_link.includes("http") ? (
                            <div className="p-xl-4 mx-2 video-shots-wrap">
                              <Media>
                                {(mediaProps) => (
                                  <div
                                    className="media"
                                    onKeyDown={keyboardControls.bind(
                                      null,
                                      mediaProps
                                    )}
                                  >
                                    <Player
                                      src={item.video_link}
                                      className="media-player"
                                      isPlaying={
                                        this.state[`video${index}`] !==
                                        undefined
                                          ? this.state[`video${index}`]
                                          : false
                                      }
                                      onPlay={() =>
                                        this.playVideo(index, mediaProps)
                                      }
                                    />
                                    <div
                                      className="media-controls"
                                      onClick={() =>
                                        this.handleVideoSlide(mediaProps)
                                      }
                                    ></div>
                                  </div>
                                )}
                              </Media>
                            </div>
                          ) : (
                            <div className="textimonial-image">
                              <img
                                src={item.image}
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          )}
                        </Col>
                        <Col lg={7}>
                          <div className="client-content">
                            <p className="client-about">{content}</p>
                            <div className="client-info">
                              <h4>{client_name}</h4>
                              <p>{designation}</p>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  );
                })}
            </Slider>
          </Container>
        </section>
      </div>
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
      fetchTestimonialsData,
      setVideoPlayOption,
    },
    dispatch
  );
};
export default withMediaProps(
  withRouter(connect(mapStateToProps, mapDispatchToProps)(Testimonials))
);
