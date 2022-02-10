import React, { Component } from 'react'
import Message from '../components/message/Message'

const SOCIAL_MEDIA_API = 'http://localhost:5000/'

export default class Messages extends Component {

  state = {
    error: null,
    isLoaded: false,
    messages: []
  }

  componentDidMount () {

    const SUFFIX = 'messages'

    fetch(SOCIAL_MEDIA_API + SUFFIX)
    .then(response => response.json())
    .then(result => {
      console.log(result)
      this.setState({
        isLoaded: true,
        messages: result
      })
    }, error => {
      this.setState({
        isLoaded: false,
        error
      })
    }
    )
  }

  getMessages = () => {
    this.state.messages.map (msg => {
      console.log(msg.user + ' : ' + msg.content)
    })

    return (
      <>
        {this.state.messages.map (msg => {
          return <p>{msg.user + ' : ' + msg.content}</p>
        })}
      </>
    )
  }

  render() {

    const { error, isLoaded, messages } = this.state

    if (error) {
      return <div>Error{error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
          <div className='messages'>
            {/* <h2>Messages</h2> */}
            {messages.map (message => {
              return <Message message={message} />
            })}
          </div>
      )
    }
  }
}
