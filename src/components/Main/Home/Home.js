import React from "react"
import infoQT from "./zquotes.json"
import XQte from "./XQuote"
import "./style/style.css"
import '../../Header/style/style.css'
 
const delay = ms => new Promise(res => setTimeout(res, ms));
var height = window.innerHeight;
var carouselContainer;
var carouselSlide;
var carouselImages;
var counter = 1;
var linkHome;
var size;
function prevBtn() {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.6s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
};
function nextBtn() {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.6s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
};
const resizeListener = async () => {
    if (window.innerHeight === height) {
        carouselContainer.style.opacity = 0;
        await delay(1500);
        window.location.reload();
    } else {
        height = window.innerHeight;
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
            if (carouselImages[counter].id === 'lastClone') {
                carouselSlide.style.transition = "none";
                counter = carouselImages.length - 2;
                carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
            }
            if (carouselImages[counter].id === 'firstClone') {
                carouselSlide.style.transition = "none";
                counter = carouselImages.length - counter;
                carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
            }
        });
        window.addEventListener("resize", resizeListener);
        linkHome = document.getElementsByClassName("linkhome");
        linkHome[0].classList.toggle("toggle_home");
    }
    componentWillUnmount() {
        window.removeEventListener("resize", resizeListener);
        linkHome[0].classList.toggle("toggle_home");
    }
    render() {
        const quotes = infoQT.map(item => <XQte key={item.id} quote={item} />)
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
                                <p className="refran">{infoQT[infoQT.length-1].refran}</p>
                            </div>
                            <p className="author">{infoQT[infoQT.length-1].author}</p>
                        </div>

                        {quotes}

                        <div className="quote" id="firstClone">
                            <div className="saying">
                                <div className="comillas">
                                    <i className="fas fa-quote-right"></i>
                                </div>
                                <p className="refran">{infoQT[0].refran}</p>
                            </div>
                            <p className="author">{infoQT[0].author}</p>
                        </div>

                    </div>
                        
                </div>
            </React.Fragment>
        )
    }
}

export default Home
