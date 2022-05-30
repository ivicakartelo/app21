import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import BlogPost from './components/BlogPost';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutComponent from './components/AboutComponent';
import Clients from './components/Clients';

function App() {
  return (
    <Router>
        <div className="App">
        <HeaderComponent />
          <div className="container">
          <Switch>
            <Route path="/" component={HomePage} exact /> 
            <Route path="/about" component={AboutComponent} />
            <Route path="/clients" component={Clients} />     
            <Route path="/:id" component={BlogPost} />
              
          </Switch>            
          </div>
          <div className="grid12">
          <FooterComponent />
          </div>		               
        </div>
      </Router>
  );
}
export default App;