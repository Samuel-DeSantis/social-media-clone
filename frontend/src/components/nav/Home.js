import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <>
          <h1>Home</h1>
          <nav>
              <Link to='/'>Home</Link><br/>
              <Link to='/about'>About</Link><br/>
              <Link to='/login'>Login</Link>
          </nav>
      </>
    )
  }
}
