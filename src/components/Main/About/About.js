import React from "react"
import './style/style.css';
import '../../Header/style/style.css'
 
var linkAbout;
class About extends React.Component {
    componentDidMount() {
        linkAbout = document.getElementsByClassName("linkabout");
        linkAbout[0].classList.toggle("toggle_about");
    }
    componentWillUnmount() {
        linkAbout[0].classList.toggle("toggle_about");
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <div className="aboutmask">
                        <img src="/img/acp.png" alt="me"></img>
                        <div>
                            <p>
                                Hello there! My name is Alberto and I love spending time developing once in a while. A few years ago, I studied to become a Technician in Computer Applications Development.
                            </p><br />
                            <p>
                                I have never considered myself a true developer - mainly because I have never officially worked as such but also, because every time I have talked to a profesional developer, I have realized how little I know. I have worked doing so many other things, but never as a developer.
                            </p><br />
                            <p>
                                I enjoy every time I manage to develop a piece of software, so far with the only purpose of having fun, but that's all. With that said, feel free to check out my little projects.
                            </p><br />
                            <p>
                                I trully hope you enjoy 'em all! <span role="img" aria-labelledby="Cross Fingers">🤞🏼</span>
                            </p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default About 