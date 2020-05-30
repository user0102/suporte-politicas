import React from "react";
import {Container, Card, CardTitle, Col} from "reactstrap";
import {render} from "react-dom";

class Cuerpo extends React.Component {
    render() {
        return (
            <div class="tar">
                <p class = "parrafo">
                    {this.props.texto}
                </p>
            </div>
        )
    }
}

export default Cuerpo;