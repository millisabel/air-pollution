import React from 'react';

import "./footer.scss";

const Footer = ({links, partners}) => {
    const partnersLogos = partners.map((logo, i) => <img key={i} src={logo} alt={'partner logo'} className="footer__partners-item"/>);
    const navLinks = links.map((link, i) => <a href={link.href} key={i} className={'footer__nav-link'}>{link.title}</a>)

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__partners">
                    {partnersLogos}
                </div>

                <div className="footer__wrap">
                    <div className="footer__nav">
                        {navLinks}
                    </div>

                    <p className="footer__text">
                        Сайт был разработан <span>Козловой Еленой</span> в учебных целях, в рамках образовательной программы IT nation. Дизайн сайта создан <span>Валерией Бубырь</span>.
                    </p>
                </div>

                <p className="footer__copy">
                    2020, Все права защищены
                </p>
                <p className="footer__copy">
                    <a href="#">Согласие на обработку персональных данных</a>
                    <a href="#">Политика конфиденциальности</a>
                     <br/>

                </p>
            </div>
        </footer>
    );
};

export default Footer;