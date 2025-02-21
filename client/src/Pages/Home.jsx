import React from 'react';
import Categories from '../components/Categories';
import Courses from '../components/Courses';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <Categories/>
      <Courses/>
      <Footer />
    </>
  );
};

export default Home;
