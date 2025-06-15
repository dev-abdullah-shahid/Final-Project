import React, { useState } from 'react';

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
    { id: 'all', name: 'All Projects', color: 'bg-purple-500' },
    { id: 'fitness', name: 'Fitness', color: 'bg-green-500' },
    { id: 'startup', name: 'Startups', color: 'bg-blue-500' },
    { id: 'project', name: 'Community', color: 'bg-orange-500' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="relative px-6 py-16 text-center">
          <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
            Creative Gallery
          </h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto leading-relaxed">
            Exploring the intersection of community, innovation, and creative energy through impactful projects
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? `${category.color} text-white shadow-lg`
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(item => (
              <div
                key={item.id}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-white/10"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white ${
                    categories.find(cat => cat.id === item.category)?.color || 'bg-gray-500'
                  }`}>
                    {categories.find(cat => cat.id === item.category)?.name || item.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Hover Details */}
                  <div className={`space-y-3 transition-all duration-500 ${
                    hoveredItem === item.id ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'
                  }`}>
                    <div className="h-px bg-gradient-to-r from-purple-500 to-blue-500"></div>
                    
                    <p className="text-purple-200 text-sm italic">
                      {item.details}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-green-400 font-semibold text-sm">
                        Impact: {item.impact}
                      </span>
                      <div className="flex space-x-1">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"
                            style={{ animationDelay: `${i * 0.2}s` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/0 via-purple-600/5 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-12 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-purple-300 mb-4">
            "The profound communal aspect of creativity brings people together to build something meaningful."
          </p>
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;