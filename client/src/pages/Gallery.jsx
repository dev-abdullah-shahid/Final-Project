import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredItem, setHoveredItem] = useState(null);

  const galleryItems = [
    {
      id: 1,
      category: 'fitness',
      title: 'Urban Fitness Revolution',
      description: 'Transforming city spaces into outdoor gyms with community-driven workouts that bring neighbors together.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      details: 'Weekly meetups in parks across the city, featuring bodyweight exercises and team challenges.',
      impact: '500+ active members'
    },
    {
      id: 2,
      category: 'startup',
      title: 'EcoTech Solutions',
      description: 'Developing smart sensors that help local businesses reduce waste and optimize energy consumption.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      details: 'AI-powered analytics dashboard with real-time environmental impact tracking.',
      impact: '$2M seed funding'
    },
    {
      id: 3,
      category: 'project',
      title: 'Community Art Walls',
      description: 'Collaborative mural project connecting artists with local businesses to beautify neighborhoods.',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop',
      details: 'Monthly rotating exhibitions featuring emerging local artists and interactive community voting.',
      impact: '25 murals completed'
    },
    {
      id: 4,
      category: 'fitness',
      title: 'Mindful Movement Studio',
      description: 'Holistic wellness space combining yoga, meditation, and strength training in a supportive environment.',
      image: 'https://images.unsplash.com/photo-1506629905607-d00991d4bb61?w=400&h=300&fit=crop',
      details: 'Adaptive classes for all abilities with sliding scale pricing to ensure accessibility.',
      impact: '1000+ students served'
    },
    {
      id: 5,
      category: 'startup',
      title: 'Local Loop Marketplace',
      description: 'Digital platform connecting neighbors for skill sharing, tool lending, and community commerce.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      details: 'Blockchain-based reputation system with integrated local currency rewards.',
      impact: '10,000+ transactions'
    },
    {
      id: 6,
      category: 'project',
      title: 'Maker Space Mobile',
      description: 'Converted bus bringing 3D printing, woodworking, and electronics workshops to underserved areas.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      details: 'Fully equipped mobile workshop with solar power and satellite internet connectivity.',
      impact: '50+ communities reached'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', color: '#8b5cf6' },
    { id: 'fitness', name: 'Fitness', color: '#10b981' },
    { id: 'startup', name: 'Startups', color: '#3b82f6' },
    { id: 'project', name: 'Community', color: '#f97316' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const getCategoryColor = (categoryId) => {
    return categories.find(cat => cat.id === categoryId)?.color || '#6b7280';
  };

  return (
    <div className="gallery-container">
      {/* Header */}
      <div className="gallery-header">
        <div className="gallery-header-content">
          <h1 className="gallery-title">
            Creative Gallery
          </h1>
          <p className="gallery-subtitle">
            Exploring the intersection of community, innovation, and creative energy through impactful projects
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="gallery-filter-section">
        <div className="gallery-filter-wrapper">
          <div className="gallery-filter-buttons">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`gallery-filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                style={{
                  backgroundColor: selectedCategory === category.id ? category.color : undefined
                }}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {filteredItems.map(item => (
              <div
                key={item.id}
                className="gallery-item"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Image */}
                <div className="gallery-image-container">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="gallery-item-image"
                  />
                  <div className="gallery-image-overlay"></div>
                  
                  {/* Category Badge */}
                  <div 
                    className="gallery-category-badge"
                    style={{ backgroundColor: getCategoryColor(item.category) }}
                  >
                    {categories.find(cat => cat.id === item.category)?.name || item.category}
                  </div>
                </div>

                {/* Content */}
                <div className="gallery-item-content">
                  <h3 className="gallery-item-title">
                    {item.title}
                  </h3>
                  
                  <p className="gallery-item-description">
                    {item.description}
                  </p>

                  {/* Hover Details */}
                  <div className="gallery-hover-details">
                    <div className="gallery-divider"></div>
                    
                    <p className="gallery-details-text">
                      {item.details}
                    </p>
                    
                    <div className="gallery-impact-container">
                      <span className="gallery-impact-text">
                        Impact: {item.impact}
                      </span>
                      <div className="gallery-pulse-dots">
                        <div className="gallery-pulse-dot"></div>
                        <div className="gallery-pulse-dot"></div>
                        <div className="gallery-pulse-dot"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="gallery-footer">
        <div className="gallery-footer-content">
          <p className="gallery-footer-text">
            "The profound communal aspect of creativity brings people together to build something meaningful."
          </p>
          <div className="gallery-footer-divider"></div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;