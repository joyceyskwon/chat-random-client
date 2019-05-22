import React, { Component } from 'react';
import UserCard from './UserCard'

class UsersList extends Component {

  // show all websockets connection clients, in the future

  renderUserCard = users => {
    return users.map(user => {
      return <UserCard
        key={user.id}
        user={user}
        onClick={this.props.onClick(user.id)}
      />
    })
  }

  render() {
    return (
      <div>
        {this.renderUserCard(this.props.users)}
      </div>
    )
  }
}

export default UsersList