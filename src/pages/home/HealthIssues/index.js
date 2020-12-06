import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { withRouter } from "react-router-dom";
import Slider from "react-slick";
import { fetchVideosData, setVideoPlayOption } from "./store/action";
import cx from "classnames";
import { Media, Player, utils, withMediaProps } from "react-media-player";

const { keyboardControls } = utils;

const videoSettings = {
  className: "center",
  dots: false,
  centerMode: true,
  centerPadding: "300px",
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 1340,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "110px",
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
        adaptiveHeight: true,
      },
    },
  ],
};
class HealthIssues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],

      activeVideoIndex: null,
      activeMedia: null,
    };
  }

  componentDidMount() {
    const { fetchVideosData } = this.props;

    let formDataVideos = new FormData(); //formdata object
    formDataVideos.append("category", 0);
    fetchVideosData("videos", formDataVideos, (value) => {
      this.setState({ videos: value });
    });
  }
  playVideo = (index, media) => {
    const { activeVideoIndex } = this.state;
    const { setVideoPlayOption, HealthIssuesData } = this.props;
    var size = Object.keys(HealthIssuesData.currentVideoData).length;
    if (
      HealthIssuesData &&
      size > 0 &&
      (activeVideoIndex !== index || HealthIssuesData.videoType !== "health")
    ) {
      HealthIssuesData.currentVideoData.pause();
    }
    setVideoPlayOption("health", media);
    this.setState({
      activeVideoIndex: index,
      activeMedia: media,
      // mediaProps: media,
    });
  };
  pauseVideo = () => {
    const { activeVideoIndex, activeMedia } = this.state;
    const { HealthIssuesData } = this.props;
    // this.setState({
    //   [`video${activeVideoIndex}`]: false,
    // });
    var size = Object.keys(HealthIssuesData.currentVideoData).length;
    if (
      HealthIssuesData &&
      size > 0 &&
      HealthIssuesData.videoType === "health"
    ) {
      HealthIssuesData.currentVideoData.pause();
    }
    // if (activeMedia && activeMedia.isPlaying) {
    //   activeMedia.playPause();
    //   this.setState({
    //     activeMedia: null,
    //   });
    // }
  };
  handleVideoSlide = (media) => {
    this.setState({
      activeMedia: media,
    });

    media && media.playPause();
  };
  render() {
    const { videos } = this.state;

    return (
      <section className="health-issues-wrapper">
        <Container>
          <h3 className="title text-center">Doctor health videos</h3>
          <div className="video-shots-wrapper">
            <Slider {...videoSettings} afterChange={this.pauseVideo}>
              {videos &&
                videos.length > 0 &&
                videos.map((video, index) => {
                  return (
                    <div
                      key={index}
                      className="px-1 px-sm-2 px-md-3 video-shots-wrap"
                    >
                      <div className="position-relative">
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
                                src={video.link}
                                className="media-player w-100"
                                isPlaying={
                                  this.state[`video${index}`] !== undefined
                                    ? this.state[`video${index}`]
                                    : false
                                }
                                onPlay={() => this.playVideo(index, mediaProps)}
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
                      <p>{video.title}</p>
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
  return {
    HealthIssuesData: state.HealthIssues,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchVideosData,
      setVideoPlayOption,
    },
    dispatch
  );
};

export default compose(
  withMediaProps(
    withRouter(connect(mapStateToProps, mapDispatchToProps)(HealthIssues))
  )
);
