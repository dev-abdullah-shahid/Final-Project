import React from 'react';
import ProjectCard from '../components/ProjectCard';
import NewsletterForm from '../components/NewsletterForm';
import './Home.css'; // Ensure to create this CSS file

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to DIY Crafts!</h1>
      <section className="intro">
        <p>
          Join our community of DIY enthusiasts! Explore projects, share ideas, and improve your skills in crafting, models, and health & fitness.
        </p>
      </section>

      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="project-cards">
          <ProjectCard title="Paper Lanterns" description="Fun paper project for kids!" />
          <ProjectCard title="Fitness Tracker" description="Build your own fitness tracker." />
          <ProjectCard title="Model Airplane" description="Create a detailed model airplane." />
        </div>
      </section>

      <section className="community-board">
        <h2>Community Board</h2>
        <div className="community-posts">
          <div className="post">
            <h3>DIY Health Tips</h3>
            <p>Share your best health tips and tricks for a balanced lifestyle!</p>
          </div>
          <div className="post">
            <h3>Fitness Challenge</h3>
            <p>Join our monthly fitness challenge and share your progress!</p>
          </div>
        </div>
      </section>

      <section className="gallery">
        <h2>Our Gallery</h2>
        <div className="gallery-images">
          <img src="/path/to/image1.jpg" alt="Project 1" />
          <img src="/path/to/image2.jpg" alt="Project 2" />
          <img src="/path/to/image3.jpg" alt="Project 3" />
        </div>
      </section>

      <NewsletterForm />
    </div>
  );
};

export default Home;