// src/components/ImagePage/ImagePage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ImagePage = ({ images }) => {
  const { id } = useParams();
  const image = images[id];

  if (!image) {
    return <p>Image not found</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-4xl font-bold mb-4">{image.title}</h2>
      <img src={image.src} alt={image.alt} className="w-full h-auto" />
      <div className="mt-8">
        <p className="text-gray-200">{image.caption}</p>
      </div>
    </div>
  );
};

export default ImagePage;
