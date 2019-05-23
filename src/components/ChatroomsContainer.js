import React from 'react'
import ChatroomForm from './ChatroomForm'
import ChatroomsList from './ChatroomsList'

const ChatroomsContainer = (props) => {
  return (
    <div>
      <h2>Join one of these chatrooms</h2>
      <ChatroomsList
        chatrooms={props.chatrooms}
        handleChatroomClick={props.handleChatroomClick}
      />
      <h2>Or create a new chatroom</h2>
      <ChatroomForm
        handleChatroomFormSubmit={props.handleChatroomFormSubmit}
      />
    </div>
  )
}

export default ChatroomsContainer