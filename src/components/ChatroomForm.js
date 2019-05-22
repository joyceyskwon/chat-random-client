import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'

class ChatroomForm extends Component {

  state = {
    value: ''
  }

  onChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <Form
        className='chatroom-form'
        onSubmit={e => this.props.handleChatroomFormSubmit(e, this.state.value)}
      >
        <Form.Field>
          <label>Subject</label>
          <input 
            type="text"
            value={this.state.value}
            onChange={this.onChange}
          />
        </Form.Field>
        <Button type='submit'>
          Create a chatroom
        </Button>
      </Form>
    )
  }
}

export default ChatroomForm