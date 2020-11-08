import React from "react"
import "./Home.css"
import '../../Header/Navbar.css'

const delay = ms => new Promise(res => setTimeout(res, ms));
var height = window.height;
var carouselContainer;
var carouselSlide;
var carouselImages;
var counter = 1;
var linkHome;
var size;
function prevBtn() {
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.6s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
};
function nextBtn() {
    if(counter>=carouselImages.length-1) return;
    carouselSlide.style.transition = "transform 0.6s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
};


const resizeListener = async () => {
    if (window.height === height){
        carouselContainer.style.opacity = 0;
        await delay(1500);
        window.location.reload();
    }
};



class Home extends React.Component {

    componentDidMount() {
        carouselContainer = document.getElementById("crc");
        carouselSlide = document.getElementById("cr");
        carouselImages = document.getElementsByClassName("quote");
        size = carouselImages[0].clientWidth;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        carouselSlide.addEventListener('transitionend', () => {
            if(carouselImages[counter].id === 'lastClone'){
                carouselSlide.style.transition = "none";
                counter = carouselImages.length-2;
                carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
            }
            if(carouselImages[counter].id === 'firstClone'){
                carouselSlide.style.transition = "none";
                counter = carouselImages.length-counter;
                carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
            }
        });
        window.addEventListener("resize", resizeListener);
        linkHome = document.getElementsByClassName("linkhome");
        linkHome[0].classList.toggle("toggle_home");

        let nav = document.getElementById('special-nav');
        let ht = window.getComputedStyle(nav, null).getPropertyValue("background");
        
        if (ht === 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box'){
            carouselContainer.classList.toggle("toggle_increase_top_margin");
        } 
    }
    componentWillUnmount() {
        
        window.removeEventListener("resize", resizeListener);
        linkHome[0].classList.toggle("toggle_home");

    }
    render() {
        return (
            <React.Fragment>
                <div className="carousel-container" id="crc">
                    <i className="fas fa-arrow-left" id="prevBtn" onClick={prevBtn}></i>
                    <i className="fas fa-arrow-right" id="nextBtn" onClick={nextBtn}></i>
                    <div className="carousel-slide" id="cr">
                        <div className="quote" id="lastClone">
                            <div className="saying">
                                <div className="comillas">
                                    <i className="fas fa-quote-right"></i>
                                </div>
                                <p className="refran">It's not that I'm so smart, it's just that I stay with problems longer.</p>
                            </div>
                            <p className="author">Albert Einstein</p>
                        </div>
                        <div className="quote">
                            <div className="saying">
                                <div className="comillas">
                                    <i className="fas fa-quote-right"></i>
                                </div>
                                <p className="refran">If I have seen further, it is by standing on the shoulders of giants.</p>
                            </div>
                            <p className="author">Isaac Newton</p>
                        </div>
                        <div className="quote">
                            <div className="saying">
                                <div className="comillas">
                                    <i className="fas fa-quote-right"></i>
                                </div>
                                <p className="refran">Be not afraid of going slowly. Be afraid only of standing still.</p>
                            </div>
                            <p className="author">Chinese proverb</p>
                        </div>
                        <div className="quote">
                            <div className="saying">
                                <div className="comillas">
                                    <i className="fas fa-quote-right"></i>
                                </div>
                                <p className="refran">Earning happiness means doing good and working, not speculating and being lazy. Laziness may look inviting, but only work gives you true satisfaction.</p>
                            </div>
                            <p className="author">Anne Frank</p>
                        </div>
                        <div className="quote">
                            <div className="saying">
                                <div className="comillas">
                                    <i className="fas fa-quote-right"></i>
                                </div>
                                <p className="refran">Things may come to those who wait, but only the things left by those who hustle.</p>
                            </div>
                            <p className="author">Abraham Lincoln</p>
                        </div>
                        <div className="quote">
                            <div className="saying">
                                <div className="comillas">
                                    <i className="fas fa-quote-right"></i>
                                </div>
                                <p className="refran">Before you diagnose yourself with depression or low self-esteem, first make sure you are not, in fact, surrounded by assholes.</p>
                            </div>
                            <p className="author">Sigmund Freud</p>
                        </div>
                        <div className="quote">
                            <div className="saying">
                                <div className="comillas">
                                    <i className="fas fa-quote-right"></i>
                                </div>
                                <p className="refran">It's not that I'm so smart, it's just that I stay with problems longer.</p>
                            </div>
                            <p className="author">Albert Einstein</p>
                        </div>
                        <div className="quote" id="firstClone">
                            <div className="saying">
                                <div className="comillas">
                                    <i className="fas fa-quote-right"></i>
                                </div>
                                <p className="refran">If I have seen further, it is by standing on the shoulders of giants.</p>
                            </div>
                            <p className="author">Isaac Newton</p>
                        </div>
                    </div>
                </div>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </React.Fragment>
        )
    }
}

export default Home
