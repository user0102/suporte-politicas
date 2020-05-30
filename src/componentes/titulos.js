import React from "react";
import {render} from "react-dom";
import "./titulo.css";

class Titulo extends React.Component {
    render() {
        return (
            <div class="tar">
                <div>
                    <h4 className = "title">{this.props.texto}</h4>
                </div>
            </div>
        )
    }
}

export default Titulo;

