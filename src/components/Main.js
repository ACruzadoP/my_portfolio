import React from "react"

import { Switch, Route } from "react-router-dom";
import About from "./About";
import Portfolio from "./Portfolio";

class Main extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/about" component={About} />
                </Switch>
            </React.Fragment>
        )
    }
}

export default Main
