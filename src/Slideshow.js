import React, { useState, useEffect } from 'react';
import xmas7s from './Xmas7s.JPG';
import xmas7s1 from './Xmas7s1.JPG';
import bucknellgame from './bucknellgame.JPG';

function SlidePics() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Use the useEffect hook to change the current image index every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 4500);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const images = [
    xmas7s,
    xmas7s1,
    bucknellgame,
  ];

  return (
    <img className='slideshow-display' src={images[currentImageIndex]} alt="Slideshow" />
  );
}

export default SlidePics;