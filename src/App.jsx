import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Registrarse from './components/Registrarse';
import Inicio from './components/Inicio';
import Quienessomos from './components/Quienessomos';
import Contactenos from './components/Contactenos';

function App() {
  return (    
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Inicio} />
          <Route path="/Quienessomos" component={Quienessomos} />
          <Route path="/Contactenos" component={Contactenos} />
          <Route path="/Registrarse" component={Registrarse} />
        </Switch>
        <Footer/>
      </Router>
  );
}

export default App;
