import React from "react";

import { Link } from 'react-router-dom';

import './Navbar.css';

class Navbar extends React.Component {
    render() {
        function burgerlistener() {
            var sp_nav = document.getElementById("special-nav");
            sp_nav.classList.toggle("toggle_nav");

            var navLinks = document.querySelectorAll('.nav-links li');
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                }
            })

            var sp_bur = document.getElementById("special-burger");
            sp_bur.classList.toggle("toggle_burger");
        }
        return (
            <React.Fragment>
                <nav>
                    <div style={{gridArea: "hfirst"}}>
                        <img className="slogo" src="/img/logo.png" alt="logo" style={{width: "60%"}}/>
                    </div>
                    <div style={{gridArea: "hsecond"}}>
                        <ul className="nav-links" id="special-nav">
                            <li><Link to="/"><span>HOME</span></Link></li>
                            <li><Link to="/works"><span>WORKS</span></Link></li>
                            <li><Link to="/about"><span>ABOUT</span></Link></li>
                        </ul>
                        <div className="burger" onClick={burgerlistener} id="special-burger">
                            <div className="line1"></div>
                            <div className="line2"></div>
                            <div className="line3"></div>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}

export default Navbar
