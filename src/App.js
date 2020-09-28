import React from 'react';
import './App.scss';

import Header from "./components/header/header";
import Facts from "./components/facts/facts";
import AirQuality from "./components/airQuality/airQuality";
import Sectors from "./components/sectors/sectors";
import Footer from "./components/footer/footer";

import logo1 from './assets/logo/logo_1.svg';
import logo2 from './assets/logo/logo_2.svg';
import logo3 from './assets/logo/logo_3.svg';

function App() {
    const partners = [
        logo1,
        logo2,
        logo3
    ];

    const navLinks = [
        {
            title: "Основные факты",
            href: "#facts"
        },
        {
            title: "Индекс качества воздуха",
            href: "#quality"
        },
        {
            title: "Политика по уменьшению загрязнений",
            href: "#politics"
        }
    ];

  return (
    <>
      <Header
          title="Качество атмосферного воздуха и здоровье"
          logos={partners}
          links={navLinks}/>
      <Facts/>
      <AirQuality/>
      <Sectors/>
      <Footer/>
    </>
  );
}

export default App;
