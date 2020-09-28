import React from 'react';

const FactsItem = ({item}) => {
    return (
        <div className="facts__items">
            <img className="facts__img" src={item.imgUrl} alt="slide"/>
            <p className="facts__desc">
                {item.desc}
            </p>
        </div>
    );
};

export default FactsItem;