import React, { Component } from 'react';
// import UsersList from './UsersList'
import ChatRoom from './ChatRoom'
import ChatroomsContainer from './ChatroomsContainer.js'
import adapter from '../services/adapter'

class ChatContainer extends Component {

  state = {
    // not used at the moment
    // isUserClicked: !true,
    // clickedUser: null,

    chatrooms: [],
    currentChatroom: null
  }

  // Add findClickedUser & renderClickedUser function back in to pass down to UsersList Component once I figure out how to show all websockets connections
  // findClickedUser = userId => {
  //   if (this.props.users.length > 0) {
  //     return this.props.users.find(user => user.id === userId)
  //   } else {
  //     return alert("no users available")
  //   }
  // }

  // renderClickedUser = userId => {
  //   this.setState({ isUserClicked: true }, () => {
  //     this.setState({ clickedUser: this.findClickedUser(userId) })
  //   })
  // }

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
    this.setState({ currentChatroom: this.findChatroom(chatroomId) }, ()=>console.log(this.state.currentChatroom))
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
            currentUser={this.props.currentUser}
            chatroom={this.state.currentChatroom}
          />
        }

      </div>
    )
  }
}

export default ChatContainer