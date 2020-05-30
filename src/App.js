import React from 'react';
import logo from './logo.svg';
import './App.css';
import {render} from "react-dom";
import Titulo from "./componentes/titulos";
import { Row, Container } from 'reactstrap';
import Cuerpo from './componentes/cuerpo';
import Link from "./componentes/link"

class App extends React.Component {
  render() {
    return (
      <div>
        <Titulo texto = "What information does the application get and how is it used?" />
      <Cuerpo 
      texto = "The application does not require any type of registration, it only requires that there is an Apple Store account to download it, The application does not collect personal data"
      />
      <Titulo texto = "automatic data collection and advertising"/>
      <Cuerpo 
      texto = "I can work with advertisers and networks of third-party advertisers, who need to know how to interact with the advertising present in the application,"
      />
      <Link/>
      </div>
    );
  }
}

export default App;
