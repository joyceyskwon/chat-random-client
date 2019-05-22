import React, { Component } from 'react';
// import UsersList from './UsersList'
import ChatRoom from './ChatRoom'
import ChatroomForm from './ChatroomForm'
import ChatroomsList from './ChatroomsList'
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

  handleChatroomClick = (e, chatroomId) => {
    console.log("am i clicking?", e, chatroomId)
  }

  render() {
    return (
      <div className='chatroom-container'>
        <h2>Join one of these chatrooms</h2>
        <ChatroomsList 
          chatrooms={this.state.chatrooms}
          handleChatroomClick={this.handleChatroomClick}
        />
        <h2>Or create a new chatroom</h2>
        <ChatroomForm 
          handleChatroomFormSubmit={this.handleChatroomFormSubmit}
        />
        {
        !this.state.currentChatroom ?
          ''
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