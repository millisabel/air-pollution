import React from "react";
import Slider from "../slider/slider";

import "./facts.scss";

const Facts = ({title, slides}) => {
    return (
        <section className="facts" id="facts">
            <div className="container">
                <h2 className="facts__title">{title}</h2>
                <Slider slides={slides}/>
            </div>
        </section>
    );
};

export default Facts;