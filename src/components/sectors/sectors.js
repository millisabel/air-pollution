import React from 'react';

import SectorItem from "./sectorsItem";
import "./sectors.scss"

const Sectors = ({title, subtitle, items}) => {
    const itemsList = items.map((sector, i) => <SectorItem sector={sector} number={i+1} key={i}/>);

    return (
        <section className="sectors ">
            <div className="container">
                <h2 className="sectors__title">{title}</h2>
                <p className="sectors__subtitle">{subtitle}</p>
                <div className="sectors__list">
                    {itemsList}
                </div>
            </div>
        </section>
    );
};

export default Sectors;