import React from 'react';
import ProjectCard from '../components/ProjectCard';
import NewsletterForm from '../components/NewsletterForm';

const Home = () => {
  return (
    <div>
      <h1>Welcome to DIY Crafts!</h1>
      <ProjectCard title="Paper Lanterns" description="Fun paper project for kids!" />
      <NewsletterForm />
    </div>
  );
};

export default Home;
