import React from 'react';
import {FaAlignJustify} from 'react-icons/fa';
import {VscChromeClose} from 'react-icons/fa';


import './Nav.css';
import './Respons.css';

const Nav = () => {
    const [state, setState] = React.useState(false);
    return (
        <nav className="navbar">
            <div className="container">
             <div className="navbar__container">
             <ul className="navbar__left">
                <div className="navbar__left-logo">
                    <img src="/images/logo.png" alt="logo"></img>
                </div>
                </ul>
              <ul className="navbar__right">
                 <li>
                     <a href="">Home</a>
                </li>
                 <li>
                     <a href="">O mnie</a>
                </li>
                 <li>
                     <a href="">Umiejętności</a>
                </li>
                 <li>
                     <a href="">Doświadczenie</a>
                </li>
                 <li>
                     <a href="">Projekty</a>
                </li>
                <li>
                     <a href="">Hobby</a>
                </li>
                 <li>
                     <a href="">Kontakt</a>
                </li>
             </ul>
             </div>
            </div>
            
        </nav>
    )
}



export default Nav
