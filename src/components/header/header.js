import React, {useState} from 'react';
import MediaQuery from 'react-responsive';
import Nav from "../nav/nav";
import "./header.scss";
import "./btn.scss";

const Header = ({title, logos, links}) => {
    const logosImages = logos.map((logo, i) => <img src={logo} alt="partner logo" className="header__partners-item" key={i}/>);
    const navLinks = links.map((link, i) => <a href={link.href} className="header__nav-item" key={i}>{link.title}</a>);

    let [isMenuOpen, setMenuStatus] = useState(false);
    const closeMenu = () => {
        setMenuStatus(!isMenuOpen);
    };
    const navMenu = <Nav links={links} onClick={closeMenu}/>;

    let [btnFixed, setBtn] = useState(false);
    const handleScroll=()=>{
        if(window.scrollY > 200){
            setBtnPosition(true);
        }
        else{
            setBtnPosition(false);
        }
    };
    const setBtnPosition = (newValue) => {
        setBtn(newValue);
    };

    return (
        <section className="header" onWheel={()=>handleScroll()}>
            <div className="container">
                <div className="header__wrap">
                    <div className="header__partners">
                        {logosImages}
                    </div>
                    <button
                        className= {btnFixed ? "btn btn--menu btn--fixed" : "btn btn--menu btn--lala"}
                        onClick = {() => closeMenu()}>
                        <span/>
                    </button>
                </div>
                <MediaQuery minDeviceWidth={1300}>
                    {(matches) =>
                        matches
                            ? <div className="header__nav">{navLinks}</div>
                            : <div>{isMenuOpen ? navMenu : null}</div>
                    }
                </MediaQuery>
                <h1 className="header__title">{title}</h1>
                <a href="#maps" className="header__btn">Отследить</a>
                <div className="header__toBottom"> </div>
            </div>
        </section>
    );
};

export default Header;