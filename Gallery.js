// Gallery.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Gallery = ({ images }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {images.map((image, index) => (
        <Link key={index} to={`/image/${index}`}>
          <img src={image.src} alt={image.alt} className="w-full h-auto transform hover:scale-110 transition-transform" />
        </Link>
      ))}
    </div>
  );
};

export default Gallery;
