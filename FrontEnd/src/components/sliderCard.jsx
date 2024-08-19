// import React from 'react';
import ImageSlider from './slider'; // assuming ImageSlider component is in the same directory
// import PropTypes from 'prop-types';
import '../assets/css/silder.css';

const Silder = () => {
  const images = [
    'https://skcet.ac.in/wp-content/uploads/2023/12/CampusTour.jpg',
    'https://media.collegedekho.com/media/img/institute/crawled_images/None/GRFFGSDSGSDFFDHF.jpg',
    'https://www.srikrishna.ac.in/images/Slider/Slide2.jpg'
  ];

  return (
    <div className='slide-img'>
      <ImageSlider images={images} />
    </div>
  );
};

export default Silder;
