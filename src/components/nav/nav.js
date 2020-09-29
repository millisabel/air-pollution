import React from 'react';
import "./nav.scss";

const Nav = ({links, onClick}) => {
    const navLinks = links.map((link, i) => <a href={link.href} className="menu__item" key={i} onClick={() => onClick()}>{link.title}</a>);

    return (
        <div>
            <div className="menu">
                <div className="menu__control">
                    <button className="btn btn--close"
                            onClick = {() => onClick()}
                    />
                    <button className="btn btn--menu"
                            onClick = {() => onClick()}
                    ><span/></button>
                </div>
                <nav className="menu__links">{navLinks} </nav>
                <div className="menu__copy">
                    <p>2020, Все права защищены</p>
                    <a href="#">Согласие на обработку персональных данных</a>
                    <a href="#">Политика конфиденциальности</a>
                </div>
            </div>
        </div>
    );
};

export default Nav;