import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'

export default class ContactUs extends Component
{
  constructor(props)
  {
    super(props)
    this.state={
      name:'',
      email:'',
      message:''
    }
  }
  onHandelName = (e) => {
    this.setState(
      {
        name:e.target.value
      }
    )
    console.log(this.state.name)
  }
  onHandelEmail = (e) => {
    this.setState(
      {
        email:e.target.value
      }
    )
    console.log(this.state.email)
  }
  onHandelMessage = (e) => {
    this.setState(
      {
        message:e.target.value
      }
    )
    console.log(this.state.message)
  }
  onSubmit = (e) =>
  {
      console.log(this.state)
      e.preventDefault();
      const templateId = 'template_vk2qnoq'
      this.sendFeedback(templateId, {
        message: this.state.message, 
        name: this.state.name, 
        email: this.state.email
       }
)
  }
  sendFeedback = (templateId, variables) => {
    emailjs.send(
      'service_qzvq9x4', templateId ,
      variables,'user_WAEvGsAsRU3iXvBM6Mf9X'
      ).then(res => {
        // Email successfully sent alert
        this.setState({
          name:'',
          message:'',
          email:''
        })
        alert('Email Successfully Sent',res) 
      })
      // Email Failed to send Error alert
      .catch(err => {
       alert('Email Error:', err)
      })
  }
  render()
  {
      return(
        <>
      <h1 className="contact-h1">Contact Me</h1>
      <div className="contact-div">
        <form className="contact-form">

              <label className="from-group">Name</label>
              <input type="text" value={this.state.name} className="form-control" onChange={this.onHandelName} />
         
              <label className="from-group">Email address</label>
              <input type="email" value={this.state.email} className="form-control" onChange={this.onHandelEmail} />
         
              <label className="from-group">Message</label>
              <textarea value={this.state.message} className="form-control" rows="5" onChange={this.onHandelMessage}></textarea>
         
        <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
        </form>
      </div>
      </>)
  }
}