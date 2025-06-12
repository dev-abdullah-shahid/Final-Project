import React from 'react';
import './Gallery.css'; // Make sure to create this CSS file

const Gallery = () => {
  const images = [
    // Add your image URLs here
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    // Continue adding images...
  ];

  return (
    <div>
      <h2>Gallery</h2>
      <p>Welcome to the DIY Gallery!</p>
      <div className="gallery">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image} alt={`Gallery item ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;