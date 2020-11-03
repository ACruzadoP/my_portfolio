import React from "react"
import './Portfolio.css';

class Portfolio extends React.Component {
    render() {

        function toggleinfoP1() {
            var gridbox = document.getElementById("gridbox3_P1");
            var info4 = document.getElementById("info4_P1");
            var info3 = document.getElementById("info3_P1");

            gridbox.classList.toggle("toggle_gridbox");
            info4.classList.toggle("toggle_info");
            info3.classList.toggle("toggle_info");
        }
        function toggleinfoP2() {
            var gridbox = document.getElementById("gridbox3_P2");
            var info4 = document.getElementById("info4_P2");
            var info3 = document.getElementById("info3_P2");

            gridbox.classList.toggle("toggle_gridbox");
            info4.classList.toggle("toggle_info");
            info3.classList.toggle("toggle_info");
        }
        function toggleinfoP3() {
            var gridbox = document.getElementById("gridbox3_P3");
            var info4 = document.getElementById("info4_P3");
            var info3 = document.getElementById("info3_P3");

            gridbox.classList.toggle("toggle_gridbox");
            info4.classList.toggle("toggle_info");
            info3.classList.toggle("toggle_info");
        }
        function toggleinfoP4() {
            var gridbox = document.getElementById("gridbox3_P4");
            var info4 = document.getElementById("info4_P4");
            var info3 = document.getElementById("info3_P4");

            gridbox.classList.toggle("toggle_gridbox");
            info4.classList.toggle("toggle_info");
            info3.classList.toggle("toggle_info");
        }
        function toggleinfoP5() {
            var gridbox = document.getElementById("gridbox3_P5");
            var info4 = document.getElementById("info4_P5");
            var info3 = document.getElementById("info3_P5");

            gridbox.classList.toggle("toggle_gridbox");
            info4.classList.toggle("toggle_info");
            info3.classList.toggle("toggle_info");
        }

        return (
            <React.Fragment>
                <div className="portfoliomask">

                    <div className="gridbox1" onClick={toggleinfoP1}>
                        <div className="info1">PHASE I</div>
                        <div className="info2">2006-2010</div>
                    </div>

                    <div className="gridbox2">
                        <ul className="info3" id="info3_P1">
                            <li><img className="techimg" src="/img/c.png" alt="c" /></li>
                            <li><img className="techimg" src="/img/csharp.png" alt="csharp" /></li>
                            <li><img className="techimg" src="/img/vb.png" alt="vb" /></li>
                            <li><img className="techimg" src="/img/java.png" alt="java" /></li>
                        </ul>
                    </div>

                    <div className="gridbox3" id="gridbox3_P1">
                        <p className="info4" id="info4_P1">
                            1Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat iusto quisquam alias temporibus blanditiis exercitationem.
                        </p>
                    </div>

                </div>
                <div className="portfoliomask">
                    <div className="gridbox1"  onClick={toggleinfoP2}>
                        <div className="info1">PHASE II</div>
                        <div className="info2">2011-2012</div>
                    </div>
                    <div className="gridbox2">
                        <ul className="info3" id="info3_P2">
                            <li><img className="techimg2" src="/img/l2net.png" alt="l2net" /></li>
                        </ul>
                    </div>
                    <div className="gridbox3" id="gridbox3_P2">
                        <p className="info4" id="info4_P2">
                            2Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat iusto quisquam alias temporibus blanditiis exercitationem.
                        </p>
                    </div>
                </div>
                <div className="portfoliomask">
                    <div className="gridbox1" onClick={toggleinfoP3}>
                        <div className="info1">PHASE III</div>
                        <div className="info2">2014-2015</div>
                    </div>
                    <div className="gridbox2">
                        <ul className="info3"  id="info3_P3">
                            <li><img className="techimg" src="/img/csharp.png" alt="csharp" /></li>
                        </ul>
                    </div>
                    <div className="gridbox3" id="gridbox3_P3">
                        <p className="info4" id="info4_P3">
                            3Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat iusto quisquam alias temporibus blanditiis exercitationem.
                        </p>
                    </div>
                </div>
                <div className="portfoliomask">
                    <div className="gridbox1"  onClick={toggleinfoP4}>
                        <div className="info1">PHASE IV</div>
                        <div className="info2">2016-2018</div>
                    </div>
                    <div className="gridbox2">
                        <ul className="info3" id="info3_P4">
                            <li><img className="techimg" src="/img/js.png" alt="js" /></li>
                            <li><img className="techimg" src="/img/java.png" alt="java" /></li>
                        </ul>
                    </div>
                    <div className="gridbox3" id="gridbox3_P4">
                        <p className="info4" id="info4_P4">
                            4Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat iusto quisquam alias temporibus blanditiis exercitationem.
                        </p>
                    </div>
                </div>
                <div className="portfoliomask">
                    <div className="gridbox1" onClick={toggleinfoP5}>
                        <div className="info1">PHASE V</div>
                        <div className="info2">2019-2020</div>
                    </div>
                    <div className="gridbox2">
                        <ul className="info3" id="info3_P5">
                            <li><img className="techimg" src="/img/react.png" alt="react" /></li>
                            <li><img className="techimg" src="/img/git.png" alt="git" /></li>
                            <li><img className="techimg" src="/img/js.png" alt="js" /></li>
                            <li><img className="techimg" src="/img/html.png" alt="html" /></li>
                            <li><img className="techimg" src="/img/css.png" alt="css" /></li>
                            <li><img className="techimg" src="/img/sass.png" alt="sass" /></li>
                        </ul>
                    </div>
                    <div className="gridbox3" id="gridbox3_P5">
                        <p className="info4" id="info4_P5">
                            5Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat iusto quisquam alias temporibus blanditiis exercitationem.
                        </p>
                    </div>
                </div>
                <p>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </p>
            </React.Fragment>
        )
    }
}

export default Portfolio
