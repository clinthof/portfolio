import React from 'react';
import './App.css';
import { Route, Switch } from "wouter";
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Navbar from './components/NavBar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/resume' component={Resume} />
        <Route path='/contact' component={Contact} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
