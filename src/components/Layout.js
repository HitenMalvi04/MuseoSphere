
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';
import OverlayMenu from './OverlayMenu';
import MainContent from './MainContent';
import EventInDashboard from './EventInDashboard';
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
        <Header />
        <OverlayMenu/>
        {/* <MainContent/> */}
        <Outlet/>
        
        <Footer />
    </>
  );
};

export default Layout;
