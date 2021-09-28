import React, { Component } from 'react';
import {MdEmail,MdLocationOn} from 'react-icons/md';
import "./Footer.css"
import ButtonMailto from './ButtonMailto.jsx'

export default class Footer extends Component
{

  render()
  {
    return(
      <div className="Footer">
        <div>
          <p>Have a Question?</p>
            <p className="footer-p">
            <MdEmail/>
            <ButtonMailto label="parmarkiran245@gmail.com" mailto="mailto:parmarkiran245@gmail.com" />
            </p>
            <p><MdLocationOn/>  Auckland,New Zeland</p>
          </div>
            <ul className="social-icons">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
              <li><a className="facebook" href="www.linkedin.com/in/kiranbenpadhiyar"><i className="fa fa-facebook"></i></a></li>
              <li><a className="twitter" href="www.linkedin.com/in/kiranbenpadhiyar"><i className="fa fa-twitter"></i></a></li>
              <li><a className="dribbble" href="www.linkedin.com/in/kiranbenpadhiyar"><i className="fa fa-dribbble"></i></a></li>
              <li><a className="linkedin" href="www.linkedin.com/in/kiranbenpadhiyar"><i className="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
    )
  }
}