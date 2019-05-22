import React, { Component } from 'react';
import Nav from './components/Nav'
import LoginForm from './components/LoginForm'
import ChatContainer from './components/ChatContainer'
import adapter from './services/adapter'
import './App.css';
import { ActionCableConsumer } from 'react-actioncable-provider'

class App extends Component {

  state = {
    users: [],
    currentUser: null
  }

  componentDidMount() {
    this.fetchUsers()
  }

  fetchUsers = () => {
    // fetch websocket connected clients, in the future
    adapter.fetchUsers().then(res => {
      this.setState({ users: [...res] })
    })
  }

  createUser = userData => {
    adapter.createUser(userData)
    .then(currentUser => {
      this.setState({ currentUser })
    })
  }

  handleLoginSubmit = (e, userData) => {
    e.preventDefault()
    const user = {
      username: userData.username,
      color: userData.color,
      is_online: !false
    }
    this.createUser(user)
  }

  handleSocketResponse = data => {
    const message = {
      user_id: data.user_id,
      chatroom_id: data.chatroom_id,
      content: data.content
    }
    adapter.addMessage(message)
  }

  render() {
    return (
      <div className="App">
        <ActionCableConsumer 
          channel={{channel: 'MessageChennel', chatroom_id: this.state.currentChatroom ? this.state.currentChatroom.id : 0}}
          onReceived={res => {
            this.handleSocketResponse(res)
          }}
        />
        <Nav 
          currentUser={this.state.currentUser}
        />
        {
        !this.state.currentUser ?
          <LoginForm 
            handleLoginSubmit={this.handleLoginSubmit}
          />
        :
          <ChatContainer
            users={this.state.users}
            currentUser={this.state.currentUser}
          />
        }
      </div>
    )
  }
}

export default App;
