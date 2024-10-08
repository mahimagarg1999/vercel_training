"use client";

import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';

const About = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <Header />
      <h1>About Page</h1>
      <p>Welcome to the About page!</p>
      <Button text="Click Me" onClick={handleClick} />
      <Footer />
    </div>
  );
};

export default About;
