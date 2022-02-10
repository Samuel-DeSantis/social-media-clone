import React, { Component } from 'react'

export default class Message extends Component {

  Message = () => {
    return (
      <div key={this.props.message.id} className='message'>
        <h3 className='message-content'>{this.props.message.content}</h3>
        <div className='message-user'>@{this.props.message.user}</div>
      </div>
    )
  }

  render() {
    return (
      <>{this.Message()}</>
    )
  }
}
