import React, { Component } from 'react'

export default class NewMessage extends Component {
  
    newMessage = () => {
        return (
        <form className='new-message-form'>
            <input 
                type='textarea'
                wrap='hard'
                className='content'
                placeholder='Type your message here...'
            />
            <input type='submit' className='submit' value='Send' />
        </form>
        )
    }
  
    render() {
    return (
        <div className='new-message'>
            {this.newMessage()}
        </div>
    )
  }
}
