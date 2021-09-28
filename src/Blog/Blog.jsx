import React, { Component } from 'react';
import slider1 from './images/slider1.jpg'
import slider2 from './images/slider2.jpg'
import slider3 from './images/slider3.jpg'
import slider4 from './images/slider4.png'
import './Blog.css'


export default class Blog extends Component
{
  render()
  {
      return(
        <div className="blog-div">
           <h1 className="blog-h1">My Projects</h1>
           <div className="slider-wrapper">
  <div className="slider">
    <input type="radio" name="slider" className="trigger" id="one" checked={true} />
    <div className="slide">
      <figure className="slide-figure">
        <img className="slide-img" src={slider1} />
        
      </figure>{/* .slide-figure */}
    </div>{/* .slide */}
    <input type="radio" name="slider" className="trigger" id="two" />
    <div className="slide">
      <figure className="slide-figure">
        <img className="slide-img" src={slider2} />
        
      </figure>
    </div>{/* .slide */}
    <input type="radio" name="slider" className="trigger" id="three" />
    <div className="slide">
      <figure className="slide-figure">
        <img className="slide-img" src={slider3} />
        
      </figure>
    </div>{/* .slide */}
  </div>{/* .slider */}
  <input type="radio" name="slider" className="trigger" id="four"/>
    <div className="slide">
      <figure className="slide-figure">
        <img className="slide-img" src={slider4} />
        
      </figure>
    </div>{/* .slide */}
    
  <ul className="slider-nav">
    <li className="slider-nav__item"><label className="slider-nav__label" for="one">1</label></li>
    <li className="slider-nav__item"><label className="slider-nav__label" for="two">2</label></li>
    <li className="slider-nav__item"><label className="slider-nav__label" for="three">3</label></li>
    <li className="slider-nav__item"><label className="slider-nav__label" for="four">4</label></li>
  </ul>{/* .slider-nav */}
</div>{/* .slider-wrapper */}
        </div>
     
      )
  }
}