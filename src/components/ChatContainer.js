import React, { Component } from 'react';
import UsersList from './UsersList'
import ChatRoom from './ChatRoom'

class ChatContainer extends Component {

  state = {
    userClicked: false
  }

  isUserClicked = e => {
    this.setState({ userClicked: true })
  }

  render() {
    return (
      <div>
        {
        !this.state.userClicked ?
          <UsersList
            currentUser={this.props.currentUser}
            onClick={this.isUserClicked}
          />
        :
          <ChatRoom
            currentUser={this.props.currentUser}
          />
        }
      </div>
    )
  }
}

export default ChatContainer