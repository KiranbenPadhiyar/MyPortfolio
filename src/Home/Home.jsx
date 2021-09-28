import React, { Component } from 'react';
import "./Home.css"

export default class Home extends Component
{
  render()
  {
      return(
        <div className="hero-image">
          <div className="hero-text">
            <img className="profile-img" src="Kiran.jpg" alt="Profile" />
            <h2>Hello I am</h2>
            <h1>Kiranben Padhiyar</h1>
            <h3>Web Developer specializing in full stack developer.Well-versed in numerous programming languages including REACT JS,
               HTML5, JavaScript, CSS, PHP O2OP,C#, MySQL,.net MVC. Disciplined and reliable professional with excellent
              critical thinking skills and problem-solving abilities.</h3>
          </div>
        </div> 
      )
  }
}