import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'

class MessageForm extends Component {

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
        className='message-form'
        onSubmit={e => this.props.handleMessageFormSubmit(e, this.state.value)}
      >
        <Form.Field>
          <input 
            type="text"
            value={this.state.value}
            onChange={this.onChange}
          />
        </Form.Field>
        <Button type='submit'>
          Send a message
        </Button>
      </Form>
    )
  }
}

export default MessageForm