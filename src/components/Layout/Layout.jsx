import React from 'react';
import Navbar from '../Navbar/Navbar';
import MainHome from '../../page/MainHome/MainHome';
import Services from '../../page/Services/Services';
import AboutUs from '../../page/Aboutus/AboutUs';
import FeaturedProject from '../../page/Projects/FeaturedProject';
import Footer from '../Footer/Footer';
import LowerFooter from '../Footer/LowerFooter';
import Quote from '../../page/Quote/Quote/Quote';
import Testimonials from '../../page/Testimonials/Testimonials';

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <MainHome/>
      {/* <AboutUs/>
      <Services/>
      <FeaturedProject/>
      <Testimonials/>
      <Quote/>
      <Footer/>
      <LowerFooter/> */}
    </div>
  );
}

export default Layout;
