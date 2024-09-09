
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';
import OverlayMenu from './OverlayMenu';

const Layout = () => {
  return (
    <>
        <Header />
        <OverlayMenu/>
        <Banner />
        <Footer />
    </>
  );
};

export default Layout;
