import React, { Component } from 'react';
import ChatroomItem from './ChatroomItem'

class ChatroomsList extends Component {

  render() {
    return (
      <div>
        {this.props.chatrooms.map(chatroom => {
          return <ChatroomItem 
            key={chatroom.id}
            chatroom={chatroom}
            onClick={e => this.props.handleChatroomClick(e, chatroom.id)}
          />
        })}
      </div>
    )
  }
}

export default ChatroomsList