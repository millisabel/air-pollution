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
    const factsSlides = [
        {
            id: "slide-1",
            imgUrl: require("./assets/sectors/sectors_1.jpg"),
            desc: "Женщины и дети – главные жертвы загрязнения воздуха"
        },
        {
            id: "slide-2",
            imgUrl: require("./assets/sectors/sectors_2.jpg"),
            desc: "Защитники окружающей среды подвергаются преследованиям"
        },
        {
            id: "slide-3",
            imgUrl: require("./assets/sectors/sectors_3.jpg"),
            desc: "Загрязнение воздуха – нарушение прав человека"
        },
        {
            id: "slide-4",
            imgUrl: require("./assets/sectors/sectors_4.jpg"),
            desc: "4,2 миллиона случаев преждевременной смерти людей из-за загрязнения \n" +
                "атмосферного воздуха"
        },
        {
            id: "slide-5",
            imgUrl: require("./assets/sectors/sectors_5.jpg"),
            desc: "Согласно оценкам, суммарный объем затрат в связи с загрязнением воздуха превышает 5 трлн долл. в год."
        }
    ];

  return (
    <>
      <Header
          title="Качество атмосферного воздуха и здоровье"
          logos={partners}
          links={navLinks}/>
      <Facts
          title="Основные факты"
          slides={factsSlides}
      />
      <AirQuality
          title="Индекс качества воздуха в режиме реального времени"
      />
      <Sectors/>
      <Footer/>
    </>
  );
}

export default App;
