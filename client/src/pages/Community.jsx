import React from 'react';
import './Community.css';

const communities = [
  {
    name: "Art Enthusiasts",
    description: "A community for those who love art, sharing masterpieces and techniques.",
    image: "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Tech Innovators",
    description: "Join discussions about the latest in technology and innovation.",
    image: 'https://plus.unsplash.com/premium_photo-1680700308566-543a60569017?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHRlY2h8ZW58MHx8MHx8fDA%3D',
  },
  {
    name: "Nature Lovers",
    description: "Connect with fellow nature enthusiasts and share your adventures.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fHww",
  },
  {
    name: "Book Club",
    description: "A space for book lovers to discuss their favorite reads and recommendations.",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
  },
];

const Community = () => {
  return (
    <div className="community">
      <h1 className="community-title">Communities</h1>
      <div className="community-list">
        {communities.map((community, index) => (
          <div className="community-card" key={index}>
            <img src={community.image} alt={community.name} className="community-image" />
            <h2 className="community-name">{community.name}</h2>
            <p className="community-description">{community.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;