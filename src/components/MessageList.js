import React, { Component } from 'react';
import Message from './Message'

class MessageList extends Component {

  renderMessages = () => {
    if(this.props.messages.length > 0) {
      this.props.messages.map(message => <Message key={message.id} message={message} />)
    } else {
      return "send a first message"
    }
  }

  render() {
    return (
      <div className="ui">
        {this.renderMessages}
      </div>
    )
  }

}

export default MessageList 