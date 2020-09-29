import React from 'react';

const SliderItem = ({ children, ...params }) => (
    <div {...params}>
        <span>{children}</span>
    </div>
);

export default SliderItem;