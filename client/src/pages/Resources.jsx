import React from 'react';
import './Resources.css';

const resources = [
  {
    title: "MDN Web Docs",
    description: "Comprehensive documentation for web technologies including HTML, CSS, and JavaScript.",
    link: "https://developer.mozilla.org",
    image: "https://via.placeholder.com/300/FF5733/FFFFFF?text=MDN",
  },
  {
    title: "FreeCodeCamp",
    description: "Learn to code for free with thousands of coding lessons and projects.",
    link: "https://www.freecodecamp.org",
    image: "https://via.placeholder.com/300/33FF57/FFFFFF?text=FreeCodeCamp",
  },
  {
    title: "W3Schools",
    description: "A popular web developer site with tutorials and references on web development languages.",
    link: "https://www.w3schools.com",
    image: "https://via.placeholder.com/300/3357FF/FFFFFF?text=W3Schools",
  },
  {
    title: "CSS-Tricks",
    description: "A website about all things CSS, from tips and tricks to tutorials and articles.",
    link: "https://css-tricks.com",
    image: "https://via.placeholder.com/300/FF33A1/FFFFFF?text=CSS-Tricks",
  },
];

const Resource = () => {
  return (
    <div className="resource">
      <h1 className="resource-title">Resources</h1>
      <div className="resource-list">
        {resources.map((resource, index) => (
          <div className="resource-card" key={index}>
            <img src={resource.image} alt={resource.title} className="resource-image" />
            <h2 className="resource-name">{resource.title}</h2>
            <p className="resource-description">{resource.description}</p>
            <a href={resource.link} className="resource-link" target="_blank" rel="noopener noreferrer">Visit Resource</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resource;