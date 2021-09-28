import React, { Component } from 'react';
import './About.css'

export default class About extends Component
{
  render()
  {
      return(
        <>
        <h1 className="about-h1">About Me</h1>
        <div className="content-div">
              <p>
              Hi,My name is Kiranbe Padhiyar.I am hardworking and specialized in computer application.
              Currently I am living in Auckland, New Zeland and working as software developer intern in MVP Studio.
              Apart from that I have 2 years of experience as system analyst in ATOS India pvt.
              </p><p>
              I’m a super curious. I spend a lot of time coding and developing as specially in front end, 
              but there’s also a lot more to it.Right now, I’m excited about the still very complicated WebAssembly, 
              and working towards becoming a React senior. In the following years, 
              I also plan to explore the “server-side” more and become a better-rounded full-stack dev. 
              </p><p>
              Programming is a true passion of mine and that passion continually grows with every meaningful tech-related conversation I have, 
              with every moment of clarity as I finally figure out a nagging issue on a project, and with every new concept, language,
              or framework I delve into.
              </p><p>
              I enjoy the collaborative nature of working on a team building a product.
              The feedback, discussion, and review in this environment brings out the best in each individual member, 
              and is a crucial component in my own personal development.
              </p><p>
              Apart from this, I am interested in Full-Stack web development and I call myself an Illustrator.
              </p>
           </div>
        </>
      )
  }
}