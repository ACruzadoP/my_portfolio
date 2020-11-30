import React from "react";
import { Link } from 'react-router-dom';
import './style/style.css';
import '../Main/Home/Home'
 
var sp_nav;
class Navbar extends React.Component {
    render() {
        function burgerlistener() {
            sp_nav = document.getElementById("special-nav");
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
                    <div style={{ gridArea: "hfirst" }}>
                        <img src="/img/logo.png" alt="logo" />
                    </div>
                    <div style={{ gridArea: "hsecond" }}>
                        <ul className="nav-links" id="special-nav">
                            <li className="linkhome"><Link to="/"><span>HOME</span></Link></li>
                            <li className="linkworks"><Link to="/works"><span>WORKS</span></Link></li>
                            <li className="linkabout"><Link to="/about"><span>ABOUT</span></Link></li>
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
