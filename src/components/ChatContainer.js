import React, { Component } from 'react';
import UsersList from './UsersList'
import ChatRoom from './ChatRoom'

class ChatContainer extends Component {

  render() {
    return (
      <div>
        <UsersList />
        <ChatRoom />
      </div>
    )
  }
}

export default ChatContainer