import React, {useState} from 'react';
import MediaQuery from 'react-responsive';
import Nav from "../nav/nav";
import "./header.scss";
import "./btn.scss";

const Header = ({title, logos, links}) => {
    const logosImages = logos.map((logo, i) => <img src={logo} alt="partner logo" className="header__partners-item" key={i}/>);
    const navLinks = links.map((link, i) => <a href={link.href} className="menu__item" key={i}>{link.title}</a>);

    let [isMenuOpen, setMenuStatus] = useState(false);
    const closeMenu = () => {
        setMenuStatus(!isMenuOpen);
    };
    const navMenu = <Nav links={links} onClick={closeMenu}/>;

    return (
        <section className="header">
            <div className="container">
                <div className="header__wrap">
                    <div className="header__partners">
                        {logosImages}
                    </div>
                    <button className="btn btn--menu"
                            onClick = {() => closeMenu()}
                    ><span/></button>
                </div>
                <div className="header__nav">

                    <MediaQuery minDeviceWidth={1200}>
                        {(matches) =>
                            matches
                                ? <p>{navLinks}</p>
                                : <div>{isMenuOpen ? navMenu : null}</div>
                        }
                    </MediaQuery>
                </div>
                <h1 className="header__title">{title}</h1>
                <a href="#maps" className="header__btn">Отследить</a>
                <div className="header__toBottom"> </div>
            </div>
        </section>
    );
};

export default Header;