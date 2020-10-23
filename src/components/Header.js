import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        
        function burgerlistener (){
            var sp_bur = document.getElementById("special-burger");
            var sp_nav = document.getElementById("special-nav");
            var navLinks = document.querySelectorAll('.nav-links li');

            sp_nav.classList.toggle("nav-active");
            navLinks.forEach((link, index)=>{
                if(link.style.animation){
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                }
            })
            sp_bur.classList.toggle("toggle");

        }

        return (
            <React.Fragment>

                <nav>

                    <Link to="/">
                        <img src="/img/logo.jpg" alt="logo"/>
                    </Link>

                    <ul className="nav-links" id="special-nav">
                        <li>
                            <Link to="/portfolio">PORTFOLIO</Link>
                        </li>
                        <li>
                            <Link to="/about">ABOUT</Link>
                        </li>
                    </ul>
                    
                    <div className="burger" onClick={burgerlistener} id="special-burger">
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>

                </nav>

            </React.Fragment>
        )
    }
}

export default Header