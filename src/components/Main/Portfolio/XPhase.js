import React from "react"
import imgAll from "./infoImgs.json"

import './Works.css'

function XPhase (props) {

    var imgs = imgAll.map(img => <li key={img.id}><img className={img.cn} src={img.url} alt={img.alt}/></li>);
    var imgsP1 = [imgs[0],imgs[1],imgs[2],imgs[3]];
    var imgsP2 = [imgs[4]];
    var imgsP3 = [imgs[1]];
    var imgsP4 = [imgs[5],imgs[3]];
    var imgsP5 = [imgs[6],imgs[7],imgs[5],imgs[8],imgs[9],imgs[10]];

    const imgsPhases = [imgsP1,imgsP2,imgsP3,imgsP4,imgsP5];
    imgs = imgsP1 = imgsP2 = imgsP3 = imgsP4 = imgsP5 = null;


    /*
        Adding Line Breaks and links
    */
    var lbtext = props.phase.text.split('\n');
    var lbtextf = "";
    for (var i = 0; i<= lbtext.length-1; i++){

        if (lbtext[i].includes('L2NET_LINK')){
            lbtext[i] = lbtext[i].replace('L2NET_LINK','');
            lbtext[i] = <span>{lbtext[i]} <a href="https://github.com/users/ACruzadoP/projects/3" target="_blank" rel="noopener noreferrer">here</a></span>
        }

        lbtextf = <span> {lbtextf} {lbtext[i]} <br /><br /></span>;
    }
    lbtext = null;

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
                    <div className="info4">
                        {lbtextf}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default XPhase