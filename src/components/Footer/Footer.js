import React from "react"
import Social from "./Social"

class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <footer>
                    <div className="box1"></div>
                    <div className="box2"><Social /></div>
                    <div className="box3"></div>
                </footer>
            </React.Fragment>
        )
    }
}

export default Footer
