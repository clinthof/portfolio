import React from 'react';
import './App.css';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Navbar from './components/NavBar/Navbar';
import { Route, Switch } from "wouter";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path='/' component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/resume' component={Resume} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
