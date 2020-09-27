import React from 'react';
import './App.scss';
import Header from "./components/header/header";
import Facts from "./components/facts/facts";
import AirQuality from "./components/airQuality/airQuality";
import Sectors from "./components/sectors/sectors";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Header/>
      <Facts/>
      <AirQuality/>
      <Sectors/>
      <Footer/>
    </>
  );
}

export default App;
