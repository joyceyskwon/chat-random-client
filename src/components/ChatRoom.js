import React, { Component } from 'react';
import MessageList from './MessageList'
import MessageForm from './MessageForm'

class ChatRoom extends Component {

  state = {
    messages: []
  }

  render() {
    return (
      <div>
        <MessageList 
          messages={this.state.messages}
        />
        <MessageForm />
        inside ChatRoom
      </div>
    )
  }
}

export default ChatRoom