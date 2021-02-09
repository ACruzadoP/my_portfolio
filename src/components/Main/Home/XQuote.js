import React from "react"
import './style/style.css'
 
function XQuote(props) {
    
    return (
        <React.Fragment>

                <div className="quote">
                    <div className="saying">
                        <div className="comillas">
                            <i className="fas fa-quote-right"></i>
                        </div>
                        <p className="refran">{props.quote.refran}</p>
                    </div>
                    <p className="author">{props.quote.author}</p>
                </div>

        </React.Fragment>
    )
}

export default XQuote