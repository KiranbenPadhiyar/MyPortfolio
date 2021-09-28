import React, { Component} from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Home from './Home/Home';
import About from './About/About';
import ContactUS from './ContactUs/ContactUs';
import Blog from  './Blog/Blog';
import Error from './Error';
import { Route,Switch } from 'react-router';  
import "./App.css"

export default class App extends Component
{
  render()
  {
    return(
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/contact' component={ContactUS}/>
          <Route path='/blog' component={Blog}/>
          <Route path='/about' component={About}/>
          <Route component={Error}/>
        </Switch>
        <Footer/>
      </div>
    )
  }
}
