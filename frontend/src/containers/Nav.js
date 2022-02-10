import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from '../components/nav/About';
import Home from '../components/nav/Home';
import Login from '../components/nav/Login';

export default class Nav extends Component {
  render() {
    return (
      <div className='nav'>
          <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/login' element={<Login />} />
            </Routes>
          </BrowserRouter>
      </div>
    )
  }
}
