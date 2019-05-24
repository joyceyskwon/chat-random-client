import React, { Component } from 'react';
import MessageItem from './MessageItem'

class MessageList extends Component {

  renderMessages = messages => {
    if(messages.length > 0) {
      return messages.map(message => {
        return <MessageItem
          key={message.id}
          message={message}
          users={this.props.users}
        />
      })
    } else {
      return "send a first message"
    }
  }

  render() {
    return (
      <div className="ui">
        {this.renderMessages(this.props.messages)}
      </div>
    )
  }

}

export default MessageList 