import React from 'react';
import Header from './components/Header';
import './App.css';
import OverlayMenu from './components/OverlayMenu';
import Banner from './components/Banner';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <OverlayMenu/>
      <Banner />
      <Footer/>
    </>
  );
}

export default App;
