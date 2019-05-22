import React, { Component } from 'react';

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
      <div className="ui secondary segment">
        <form 
          onSubmit={e => this.props.handleSubmit(e, this.state.value)}
        >
          <div className="ui fluid input">
            <input 
              type="text"
              value={this.state.value}
              onChange={this.onChange}
            />
            <button 
              className="ui basic blue button" 
              type="submit"
            >
              Send a Message
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default MessageForm