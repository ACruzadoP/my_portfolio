import React from "react"

class Social extends React.Component {
    render() {
        return (
            <React.Fragment>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/alberto.cruzadopleite" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-square"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/albertocruzado/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/ACruzadoP?tab=projects" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github-square"></i>
                        </a>
                    </li>
                </ul>
            </React.Fragment>
        )
    }
}

export default Social