import React from 'react';

const Categories = () => {
  return (
    <div>
      <h1>Browse by Category</h1>
      <div>
        <button>Home Decor</button>
        <button>Upcycling</button>
        <button>Kids Crafts</button>
        <button>Seasonal Crafts</button>
      </div>

      <h2>Skill Level</h2>
      <select>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>
    </div>
  );
};

export default Categories;
