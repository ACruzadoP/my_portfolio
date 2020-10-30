import React from "react"

class Social extends React.Component {
    render() {
        return (
            <React.Fragment>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/alberto.cruzadopleite" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-square"> Facebook</i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/ACruzadoP?tab=projects" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github-square"> Github</i>
                        </a>
                    </li>
                </ul>
            </React.Fragment>
        )
    }
}

export default Social