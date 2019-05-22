import React, { Component } from 'react';
import MessageList from './MessageList'
import MessageForm from './MessageForm'
import adapter from '../services/adapter'

class ChatRoom extends Component {

  state = {
    messages: []
  }

  handleMessageFormSubmit = (e, content) => {
    e.preventDefault()
    const message = {
      user_id: this.props.currentUser.id,
      chatroom_id: this.props.chatroom.id,
      content: content
    }
    adapter.createMessage(message)
    .then(res => {
      this.setState({ messages: [...res] }, () => console.log(this.state.messages))
    })
  }

  render() {
    return (
      <div>
        <h3>Start Chatting!</h3>
        <MessageList 
          messages={this.state.messages}
        />
        <MessageForm 
          handleMessageFormSubmit={this.handleMessageFormSubmit}
        />
      </div>
    )
  }
}

export default ChatRoom