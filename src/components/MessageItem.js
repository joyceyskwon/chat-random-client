import React from 'react';
import { Message } from 'semantic-ui-react'

const MessageItem = ({ message }) => {
  return (
    <Message>{message.content}</Message>
  )
}

export default MessageItem