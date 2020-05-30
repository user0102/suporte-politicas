import React from "react";
import {render} from "react-dom";
import "./titulo.css";

class Link extends React.Component {
    render() {
        return (
            <div class = "link">
                <a href = "https://policies.google.com/technologies/ads?">https://policies.google.com/technologies/ads?</a>
            </div>
        )
    }
}

export default Link;