import React from 'react';
import { List } from 'semantic-ui-react'

const ChatroomItem = ({ chatroom }) => {
  return (
    <List divided relaxed>
      <List.Icon name='comments' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>{chatroom.subject}</List.Header>
        <List.Description as='a'>Updated 10 mins ago</List.Description>
      </List.Content>
    </List>
  )
}

export default ChatroomItem