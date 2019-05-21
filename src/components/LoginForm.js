import React, { Component } from 'react';

class LoginForm extends Component {

  state = {
    username: '',
    color: '000'
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="loginform">
        <form onSubmit={e => this.props.handleLoginSubmit(e, this.state)}>
          Username: 
          <input 
            type="text" 
            name="username"
            value={this.state.username}
            onChange={this.handleOnChange}
          ></input>
          Color: #
          <input 
            type="text" 
            name="color"
            value={this.state.color}
            onChange={this.handleOnChange}
          ></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    )
  }

}

export default LoginForm