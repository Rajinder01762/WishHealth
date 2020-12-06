import React from "react";
import Slider from "react-slick";
import sliderImage from "../../../assets/images/profile/slider-image.png";
import { Container } from "reactstrap";
const imagesData = [
  { image: sliderImage },
  { image: sliderImage },
  { image: sliderImage },
  { image: sliderImage },
  { image: sliderImage },
  { image: sliderImage },
];
const ClinicImage = () => {
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
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="clinic-images mb-5">
      <Container>
        <h2>Clinic Image</h2>
        <Slider {...settings} className="doc-gallery">
          {imagesData.map(({ image }) => (
            <div className="px-1">
              <div className="imageWrapper">
                <img src={image} alt="slider" />
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default ClinicImage;
