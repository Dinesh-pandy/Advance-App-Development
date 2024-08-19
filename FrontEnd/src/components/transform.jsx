import { useState, useEffect } from 'react';
import '../assets/css/trans.css'; // Import CSS file for styling

const Transform = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['https://res.cloudinary.com/drnokmrib/image/upload/v1710083233/Must_See__How_One_School_in_Texas_Is_Dealing_With_Guns_On_Campus_zwllif.jpg',
   'https://res.cloudinary.com/drnokmrib/image/upload/v1710083233/How_to_Choose_the_Right_Banking_and_Finance_Recruitment_Agency_1_-_Copy_oqz0fp.jpg', 
   'https://res.cloudinary.com/drnokmrib/image/upload/v1710083234/How_to_find_and_land_an_entry_level_job_after_college_nhfkwk.jpg']; 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [currentImage, images.length]);

  return (
    <div className="image-slider">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index}`}
          className={index === currentImage ? 'active' : ''}
        />
      ))}
    </div>
  );
};

export default Transform;
