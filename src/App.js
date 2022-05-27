import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import BlogPost from './components/BlogPost';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div class="App">
        <HeaderComponent />
          <div class="container">         
          <Switch>
            <Route path="/" component={HomePage} exact />           
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