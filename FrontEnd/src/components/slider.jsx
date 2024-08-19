// import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import '../assets/css/silder.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Autoplay slides
    autoplaySpeed: 3000 // Autoplay interval in milliseconds
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ImageSlider;
