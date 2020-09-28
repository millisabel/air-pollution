import React from 'react';
import "./header.scss";

const Header = ({title, logos, links}) => {
    const logosImages = logos.map((logo, i) => <img src={logo} alt="partner logo" className="header__partners-item" key={i}/>);
    const navLinks = links.map((link, i) => <a href={link.href} className="header__nav-item" key={i}>{link.title}</a>);

    return (
        <section className="header">
            <div className="container">
                <div className="header__partners">
                    {logosImages}
                </div>
                <h1 className="header__title">{title}</h1>
                <div className="header__nav">
                    {navLinks}
                </div>
                <a href="#" className="header__btn">Отследить</a>
            </div>
        </section>
    );
};

export default Header;