import React from "react"
import imgAll from "./infoImgs.json"

import './Works.css'

function XPhase (props) {
    const imgs = imgAll.map(img => <li key={img.id}><img className={img.cn} src={img.url} alt={img.alt}/></li>);
    const imgsP1 = [imgs[0],imgs[1],imgs[2],imgs[3]];
    const imgsP2 = [imgs[4]];
    const imgsP3 = [imgs[1]];
    const imgsP4 = [imgs[5],imgs[3]];
    const imgsP5 = [imgs[6],imgs[7],imgs[5],imgs[8],imgs[9],imgs[10]];

    const imgsPhases = [imgsP1,imgsP2,imgsP3,imgsP4,imgsP5];

    function toggleinfo() {
        var gridbox = document.getElementsByClassName("gridbox3");
        var info4 = document.getElementsByClassName("info4");
        var info3 = document.getElementsByClassName("info3");

        gridbox[props.phase.id-1].classList.toggle("toggle_gridbox");
        info4[props.phase.id-1].classList.toggle("toggle_info");
        info3[props.phase.id-1].classList.toggle("toggle_info");
    }

    return (
        <React.Fragment>
            <div className="portfoliomask">
                <div className="gridbox1" onClick={toggleinfo}>
                    <div className="info1">{props.phase.phaseName}</div>
                    <div className="info2">{props.phase.dates}</div>
                </div>
                <div className="gridbox2">
                    <ul className="info3">
                        {imgsPhases[props.phase.id-1]}
                    </ul>
                </div>
                <div className="gridbox3">
                    <p className="info4">
                        {props.phase.text}
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default XPhase