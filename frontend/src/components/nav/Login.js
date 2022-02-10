import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Login extends Component {
  render() {
    return (
    <>
      <h1>Login</h1>
      <nav>
          <Link to='/'>Home</Link><br/>
          <Link to='/about'>About</Link><br/>
          <Link to='/login'>Login</Link>
      </nav>
    </>
    )
  }
}
