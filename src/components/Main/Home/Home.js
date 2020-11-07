import React from "react"
import "./Home.css"

var carouselSlide;
var carouselimages;
var counter = 1;
var size;

function prevBtn() {
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
};

function nextBtn() {
    if(counter>=carouselimages.length-1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
};



class Home extends React.Component {

    componentDidMount() {
        carouselSlide = document.getElementById("cr");
        carouselimages = document.getElementsByClassName("quote");
        size = carouselimages[0].clientWidth;

        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

        carouselSlide.addEventListener('transitionend', () => {
            if(carouselimages[counter].id === 'lastClone'){
                carouselSlide.style.transition = "none";
                counter = carouselimages.length-2;
                carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
            }
            if(carouselimages[counter].id === 'firstClone'){
                carouselSlide.style.transition = "none";
                counter = carouselimages.length-counter;
                carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
            }
        });
    }

    render() {
        return (
            <div>
                <div className="carousel-container">
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
                                <p className="refran">Man often becomes what he believes himself to be. If I keep on saying to myself that I cannot do a certain thing, it is possible that I may end by really becoming incapable of doing it. On the contrary, if I have the belief that I can do it, I shall surely acquire the capacity to do it even if I may not have it at the beginning.</p>
                            </div>
                            <p className="author">Mahatma Gandhi</p>
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
            </div>
        )
    }
}


export default Home
