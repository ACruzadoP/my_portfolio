import React from "react"
import infoPF from "./infoWorks.json"
import Phasebox from "./XPhase"
import '../../Header/style/style.css'

var linkWorks;
class Works extends React.Component {
    componentDidMount() {
        linkWorks = document.getElementsByClassName("linkworks");
        linkWorks[0].classList.toggle("toggle_works");
    }
    componentWillUnmount() {
        linkWorks[0].classList.toggle("toggle_works");
    }
    render() {
        const phases = infoPF.map(item => <Phasebox key={item.id} phase={item} />)
        return (
            <React.Fragment>
                {phases}
            </React.Fragment>
        )
    }
}

export default Works