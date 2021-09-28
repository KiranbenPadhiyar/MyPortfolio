import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class ButtonMailto extends Component
{
  render(){
    return (
        <Link
            to='#'
            onClick={(e) => {
                window.location = this.props.mailto;
                e.preventDefault();
            }}
        >
            {this.props.label}
        </Link>
    );
}
}