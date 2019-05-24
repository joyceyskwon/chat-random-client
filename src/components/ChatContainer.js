import React, { Component } from 'react';
// import UsersList from './UsersList'
import ChatRoom from './ChatRoom'
import ChatroomsContainer from './ChatroomsContainer.js'
import adapter from '../services/adapter'

class ChatContainer extends Component {

  state = {
    chatrooms: [],
    currentChatroom: null
  }

  // Add findClickedUser & renderClickedUser function back in to pass down to UsersList Component once I figure out how to show all websockets connections

  componentDidMount() {
    this.fetchChatrooms()
  }

  fetchChatrooms = () => {
    adapter.fetchChatrooms()
    .then(res => {
      this.setState({ chatrooms: [...res] })
    })
  }

  handleChatroomFormSubmit = (e, subject) => {
    e.preventDefault()
    const chatroomData = { subject }
    adapter.createChatroom(chatroomData)
    .then(currentChatroom => {
      this.setState({ currentChatroom }, () => console.log(this.state.currentChatroom))
    })
  }

  findChatroom = chatroomId => this.state.chatrooms.find(chatroom => chatroom.id === chatroomId)

  handleChatroomClick = (e, chatroomId) => {
    // fetches clicked chatroom
    adapter.fetchChatroom(chatroomId)
    // sets state currentChatroom
    this.setState({ currentChatroom: this.findChatroom(chatroomId) })
  }

  render() {
    return (
      <div className='chatroom-container'>
        {
        !this.state.currentChatroom ?
          <ChatroomsContainer 
              chatrooms={this.state.chatrooms}
              handleChatroomClick={this.handleChatroomClick}
              handleChatroomFormSubmit={this.handleChatroomFormSubmit}
          />
        :
          <ChatRoom
            users={this.props.users} 
            currentUser={this.props.currentUser}
            chatroom={this.state.currentChatroom}
          />
        }

      </div>
    )
  }
}

export default ChatContainer