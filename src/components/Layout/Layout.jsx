import React from 'react';
import Navbar from '../Navbar/Navbar';
import MainHome from '../../page/MainHome/MainHome';
import Services from '../../page/Services/Services';
import AboutUs from '../../page/Aboutus/AboutUs';

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <MainHome/>
      <AboutUs/>
      <Services/>
    </div>
  );
}

export default Layout;
