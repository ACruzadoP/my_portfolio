import React from "react"
import Social from "./Social"

class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <footer>
                    <div className="testing" style={{gridArea: "fsecond"}}><Social /></div>
                </footer>
            </React.Fragment>
        )
    }
}

export default Footer
