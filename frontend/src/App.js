import React, { Component } from 'react'
import './App.css'
import Nav from './containers/Nav'
import Messages from './containers/Messages'
import NewMessage from './components/message/NewMessage'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Nav />
        <NewMessage />
        <Messages />
      </div>
    )
  }
}
