import React, { Component } from 'react';
import UsersList from './UsersList'
import ChatRoom from './ChatRoom'

class ChatContainer extends Component {

  state = {
    userClicked: !true,
    clickedUser: null
  }

  findClickedUser = userId => {
    if (this.props.users.length > 0) {
      return this.props.users.find(user => user.id === userId)
    } else {
      return alert("no users available")
    }
  }

  renderClickedUser = userId => {
    this.setState({ userClicked: true }, () => {
      this.setState({ clickedUser: this.findClickedUser })
    })
  }

  render() {
    return (
      <div>
        {
        !this.state.userClicked ?
          <UsersList
            currentUser={this.props.currentUser}
            onlineUsers={this.props.users}
            onClick={this.renderClickedUser}
          />
        :
          <ChatRoom
            currentUser={this.props.currentUser}
            clickedUser={this.state.clickedUser}
          />
        }
      </div>
    )
  }
}

export default ChatContainer