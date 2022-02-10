import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class About extends Component {
  render() {
    return (
        <>
            <h1>About</h1>
            <div>
                <Link to='/'>Home</Link><br/>
                <Link to='/about'>About</Link><br/>
                <Link to='/login'>Login</Link>
            </div>
        </>
    )
  }
}
