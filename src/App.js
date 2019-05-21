import React, { Component } from 'react';
import Nav from './components/Nav'
import LoginForm from './components/LoginForm'
import ChatContainer from './components/ChatContainer'
import adapter from './services/adapter'
import './App.css';

class App extends Component {

  state = {
    currentUser: null
  }

  createUser = userData => {
    adapter.createUser(userData)
    .then(res => {
      this.setState({ currentUser: res }, () => console.log(this.state.currentUser))
    })
  }

  handleLoginSubmit = (e, userData) => {
    e.preventDefault()
    const user = {
      username: userData.username,
      color: userData.color
    }
    this.createUser(user)
  }

  render() {
    return (
      <div className="App">
        <Nav className="sticky" />
        {
        !this.state.currentUser ?
          <LoginForm 
            handleLoginSubmit={this.handleLoginSubmit}
          />
        :
          <ChatContainer
            currentUser={this.state.currentUser}
          />
        }
      </div>
    )
  }
}

export default App;
