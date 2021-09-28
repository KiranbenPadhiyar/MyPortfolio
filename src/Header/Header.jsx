import React, { Component } from 'react';
import {AiOutlineFacebook,AiOutlineInstagram} from "react-icons/ai"
import {GiHamburgerMenu} from "react-icons/gi"
import { NavLink } from 'react-router-dom';
import "./Header.css"

export default class Header extends Component
{
  constructor(props) {
    super(props);
    this.state=
    {
      showMediaIcon:false
    }
  }

  render()
    {
    return (
      <>
       <nav>
         {/*First logo*/}
         <div className="logo">
           <h2>
             <span>K</span>iran
             <span>W</span>eb
            </h2>
          </div>
           {/*Second Link*/}
           <div className={
            this.state.showMediaIcon ? "menu-link mobile-menu-link" : "menu-link"
          }>
             <ul>
               <li>
                <NavLink exact activeClassName="nav-item-selected" to="/" className="nav-item" >Home</NavLink>
               </li>
               <li>
                <NavLink exact activeClassName="nav-item-selected" to="/blog" className="nav-item">Projects</NavLink>
               </li>
               <li>
                <NavLink exact activeClassName="nav-item-selected" to="/about" className="nav-item">AboutMe</NavLink>
               </li>
               <li>
                <NavLink exact activeClassName="nav-item-selected" to="/contact" className="nav-item">Contact</NavLink>
               </li>
              </ul>
            </div>
            {/*Third Social Media Link*/}
            <div className="social-media">
                <ul className="social-media-desktop">
                  <li>
                    <AiOutlineFacebook className="facebook"/>
                  </li>
                  <li>
                    <AiOutlineInstagram className="instagram"/>
                  </li>
                </ul>
            {/* Hamburger menu start */}
            <div className="hamburger-menu">
              <a onClick={()=>this.state.showMediaIcon ? this.setState({showMediaIcon:false}) : this.setState({showMediaIcon:true})}>
              <GiHamburgerMenu/>
              </a>
            </div>
            </div>
       </nav>
    </>
    );
    }
  }