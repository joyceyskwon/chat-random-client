import React, { Component } from 'react';
import Message from './Message'

class MessageList extends Component {

  renderMessages = messages => {
    if(messages.length > 0) {
      return messages.map(message => <Message key={message.id} message={message} />)
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