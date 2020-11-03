import React from "react"

import infoPF from "./infoWorks.json"
import Phasebox from "./XPhase"

function Works () {
    const phases = infoPF.map(item => <Phasebox key={item.id} phase={item}/>)

    return(
        <React.Fragment>
            {phases}
            <p>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </p>
        </React.Fragment>
    )
}

export default Works