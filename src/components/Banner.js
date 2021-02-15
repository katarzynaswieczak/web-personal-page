import React from 'react';
import {FaFacebook, FaInstagramSquare, FaWordpress} from 'react-icons/fa';
import './Banner.css';
import './Respons.css';

const Banner = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                      <div className="header__content">
                          <div className="header__section">
                          <ul className="header__ul">
                              <li><FaFacebook /></li>
                              <li><FaInstagramSquare /></li>
                              <li><FaWordpress /></li>
                          </ul>
                          <h1>Katarzyna Świeczak</h1>
                          <p cdata-text="Fronted Deweloper & Automatyk">Fronted Deweloper & Automatyk</p>
                          <div className="header__buttons">
                              <a href="" className="btn ab">About</a> 
                          </div>
                          </div>
                          </div>
                        </div>
                    <div className="col-6">
                        <div className="banner__img">
                            <img src="/images/my-image.png" alt="my-image" />
                        </div> 
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Banner
