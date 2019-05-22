import React, { Component } from 'react';
import UserCard from './UserCard'

class UsersList extends Component {

  // need to call it with this.props.currentUser from render()

  // render not all the registered users, but only the ones that are online

  renderUserCard = users => {
    return users.map(user => <UserCard key={user.id} user={user} onClick={this.props.onClick(user.id)} />)
  }

  render() {
    return (
      <div>
        {this.renderUserCard(this.props.onlineUsers)}
      </div>
    )
  }
}

export default UsersList