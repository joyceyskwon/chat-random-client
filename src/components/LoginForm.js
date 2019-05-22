import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'

class LoginForm extends Component {

  state = {
    username: '',
    color: ''
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <Form 
        className="loginform"
        onSubmit={e => this.props.handleLoginSubmit(e, this.state)}
      >
        <Form.Field>
          <label>Username</label>
          <input
            placeholder='Username'
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleOnChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Color</label>
          <input
            placeholder='#fff000'
            type="text"
            name="color"
            value={this.state.color}
            onChange={this.handleOnChange}
          />
        </Form.Field>
        <Button type='submit'>Login</Button>
      </Form>
    )
  }

}

export default LoginForm