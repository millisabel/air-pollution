import React, {useState} from 'react';

const SectorsItem = ({sector, number}) => {
    const [isToolTipShowing, setToolTipShowing] = useState(false);
    const [isDirectionSwitched, setDirectionSwitched] = useState(false)
    const toggleToolTip = (newValue) => {
        setDirectionSwitched(number % 3 === 0);
        setToolTipShowing(newValue);
    }
    return (
        <div className="sectors__item"
             onMouseEnter={() => toggleToolTip(true)}
             onMouseLeave={() => toggleToolTip(false)}
             style={{
                 background: `url(${sector.imgUrl}) center no-repeat`,
                 backgroundSize: 'cover'
             }}>
            <p className="sectors__item-name">
                {sector.name}
            </p>
            {
                isToolTipShowing && <p className={`sectors__item-tooltip ${
                    isDirectionSwitched
                        ? "sectors__item-switched"
                        : ""
                }`}>
                    {sector.description}
                </p>
            }
        </div>
    );
};

export default SectorsItem;