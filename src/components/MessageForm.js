import React, { Component } from 'react';
import adapter from '../services/adapter'

class MessageForm extends Component {

  state = {
    value: ''
  }

  onChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    adapter.createMessage({ content: this.state.value })
  }

  render() {
    return (
      <div className="ui secondary segment">
        <form onSubmit={this.handleSubmit}>
          <div className="ui fluid input">
            <input 
              type="text"
              value={this.state.value}
              onChange={this.onChange}
            />
            <button className="ui basic blue button" type="submit">
              Send a Message
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default MessageForm