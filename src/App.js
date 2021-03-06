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
            href: "#maps"
        },
        {
            title: "Политика по уменьшению загрязнений",
            href: "#sectors"
        }
    ];
    const factsSlides = [
        {
            id: "slide-1",
            imgUrl: require("./assets/slider/slide-1.jpg"),
            desc: "Женщины и дети – главные жертвы загрязнения воздуха"
        },
        {
            id: "slide-2",
            imgUrl: require("./assets/slider/slide-2.jpg"),
            desc: "Защитники окружающей среды подвергаются преследованиям"
        },
        {
            id: "slide-3",
            imgUrl: require("./assets/slider/slide-3.jpg"),
            desc: "Загрязнение воздуха – нарушение прав человека"
        },
        {
            id: "slide-4",
            imgUrl: require("./assets/slider/slide-4.jpg"),
            desc: "4,2 миллиона случаев преждевременной смерти людей из-за загрязнения \n" +
                "атмосферного воздуха"
        },
        {
            id: "slide-5",
            imgUrl: require("./assets/slider/slide-5.jpg"),
            desc: "Согласно оценкам, суммарный объем затрат в связи с загрязнением воздуха превышает 5 трлн долл. в год."
        }
    ];
    const sectors = [
        {
            name: "Промышленность",
            imgUrl: require("./assets/sectors/sectors_1.jpg"),
            description: "Чистые технологии, способствующие уменьшению выбросов из промышленных дымовых труб; улучшенная утилизация городских и сельскохозяйственных отходов, включая каптаж (улавливание) метана, выделяемого в местах утилизации отходов, в качестве варианта, альтернативного сжиганию (для использования в качестве биогаза)"
        },
        {
            name: "Транспорт",
            imgUrl: require("./assets/sectors/sectors_2.jpg"),
            description: "Переход к чистым способам выработки энергии; уделение приоритетного внимания скоростному городскому транспорту, пешеходным и велосипедным сетям в городах, а также железнодорожным междугородным грузовым и пассажирским перевозкам; переход к использованию более чистых большегрузных дизельных транспортных средств и автомобилей с низким уровнем выбросов, а также более чистых видов топлива, включая топливо со сниженной концентрацией серы"
        },
        {
            name: "Городское планирование",
            imgUrl: require("./assets/sectors/sectors_3.jpg"),
            description: "Улучшение энергетической эффективности зданий и обеспечение более зеленых и компактных и тем самым более энергоэффективных городов"
        },
        {
            name: "Энергия",
            imgUrl: require("./assets/sectors/sectors_4.jpg"),
            description: "Обеспечение доступа к недорогостоящим источникам энергии в быту для приготовления пищи, отопления и освещения"
        },
        {
            name: "Энергетика",
            imgUrl: require("./assets/sectors/sectors_5.jpg"),
            description: "Более широкое использование видов топлива с низким уровнем выбросов и возобновляемых источников энергии, не основанных на сжигании (таких как энергия солнца, ветра или гидроэнергия); комбинированная выработка тепла и энергии; и распределенная выработка энергии (например, энергетические минисистемы и размещаемые на крыше установки для выработки энергии из солнечной энергии)"
        },
        {
            name: "Утилизация отходов",
            imgUrl: require("./assets/sectors/sectors_6.jpg"),
            description: "стратегии уменьшения отходов, сортировки отходов, рециклирования, повторного использования или переработки отходов; а также улучшенные методы биологической утилизации отходов, такие как анаэробная переработка отходов для производства биогаза, являются практически осуществимыми, недорогими альтернативными вариантами открытому сжиганию твердых отходов"
        },
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
      <Sectors
          title="Политика по уменьшению загрязнений"
          subtitle="Есть много примеров успешной политики по уменьшению загрязнения воздуха в таких секторах, как транспорт, городское планирование, энергетика и промышленность:"
          items={sectors}
      />
      <Footer
          links={navLinks}
          partners={partners}
      />
    </>
  );
}

export default App;
