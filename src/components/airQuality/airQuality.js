import React, {useEffect, useRef, useState} from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import "./airQuality.scss";

mapboxgl.accessToken = "pk.eyJ1IjoibWlsbGlzYWJlbCIsImEiOiJja2ZsYWxwNGEyMHdlMnFvM29jbHRrZjMxIn0.S_6mZS48JL4QacAXwGxVzQ";

const AirQuality = ({title}) => {
    const mapContainer = useRef(null);
    const [locationInfo] = useState({
        lng: 31,
        lat: 48.3,
        zoom: 5
    });

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/outdoors-v11',
            center: [locationInfo.lng, locationInfo.lat],
            zoom: locationInfo.zoom
        });
    }, [])

    return (
        <section className="maps">
            <div className="container">
                <h2 className="maps__title">{title}</h2>
                <div className="maps__map" ref={mapContainer}/>
                <p className="maps__text">Для того чтобы узнать уровень загрязнения атмосферного воздуха (качество
                    воздуха) в городе Киев, необходимо выбрать соответствующую станцию мониторинга на карте выше.</p>
            </div>
        </section>
    );
};

export default AirQuality;