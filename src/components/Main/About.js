import React from "react"
import './About.css';

class About extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <div className="aboutmask">
                        <img src="/img/acp.png" alt="me"></img>
                        <div className="abouttext">
                            <p>
                                Hello there! My name is Alberto and technically, I am a Technician in Computer Applications Development.
                            </p><br />
                            <p>
                                &nbsp;The reason why I said "technically" is that I have never considered myself a true developer - mainly because I have never officially worked as such but also, because every time I have talked to a profesional developer, I have realized how little I know. I have had all sorts of jobs to be honest, but never as a developer. Don't worry, I will stop saying "developer" right now.
                            </p><br />
                            <p>
                                &nbsp;I enjoy every time I manage to develop a piece of software, so far with the only purpose of having fun, but that's all. With that said, feel free to check out my little projects.
                            </p><br />
                            <p>
                                &nbsp;I trully hope you enjoy 'em all! =)
                            </p>
                        </div>
                    </div>
                    <p>
                        <br/><br/><br/><br/><br/><br/>
                    </p>
                </div>
            </React.Fragment>
        )
    }
}

export default About