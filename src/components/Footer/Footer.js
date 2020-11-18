import React from "react"
import Social from "./Social"
import './style/style.css';

class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <footer>
                    <div className="footercontainer">
                        <div style={{ gridArea: "ffirst" }}><Social /></div>
                        <span style={{ gridArea: "fsecond" }}>
                            <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer">
                                <img alt="Creative Commons License" style={{ borderWidth: 0 }} src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" />
                            </a>
                        </span>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}

export default Footer
 