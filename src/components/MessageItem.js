import React, { Component } from 'react';
import { Message } from 'semantic-ui-react'

class MessageItem extends Component {

  // findUser = userId => {
  //   let user = this.props.users.find(user => user.id === userId)
  //   return user.username
  // }

  render() {
    return (
      <Message>
        <Message.Header>
          {this.props.message.user_id}
        </Message.Header>
        {this.props.message.content}
      </Message>
    )
  }

}

export default MessageItem