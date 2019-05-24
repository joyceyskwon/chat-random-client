import React, { Component } from 'react';
import MessageList from './MessageList'
import MessageForm from './MessageForm'
import adapter from '../services/adapter'
import { ActionCableConsumer } from 'react-actioncable-provider'

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
    adapter.addMessage(message)
  }

  handleSocketResponse = data => {
    // const message = {
    //   user_id: data.user_id,
    //   chatroom_id: data.chatroom_id,
    //   content: data.content
    // }
    this.setState({ messages: [...this.state.messages, data] })
  }

  render() {
    return (
      <div>
        <ActionCableConsumer
          channel={{ channel: 'MessageChannel', chatroom_id: this.props.chatroom.id }}
          onReceived={res => {
            this.handleSocketResponse(res)
          }}
        />
        <h3>Start Chatting!</h3>
        <MessageList
          users={this.props.users} 
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