import React, { Component } from 'react';
import MessageList from './MessageList'
import MessageForm from './MessageForm'
import adapter from '../services/adapter'

class ChatRoom extends Component {

  state = {
    messages: []
  }

  handleSubmit = (e, content) => {
    e.preventDefault()
    adapter.createMessage({ content })
  }

  render() {
    return (
      <div>
        <h3>Chat with {this.props.clickedUser.username}</h3>
        <MessageList 
          messages={this.state.messages}
        />
        <MessageForm 
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default ChatRoom