import React from 'react';
import Categories from '../components/Categories';
import Courses from '../components/Courses';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import BreadCrumbs from '../components/BreadCrumbs';

const Home = () => {
  return (
    <>
      <Hero />
      <BreadCrumbs />
      <Categories/>
      <Courses/>
      <Footer />
    </>
  );
};

export default Home;
