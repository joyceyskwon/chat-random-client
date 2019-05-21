import React, { Component } from 'react';

class UsersList extends Component {

  // need to call it with this.props.currentUser from render()

  // render not all the registered users, but only the ones that are online

  render() {
    return (
      <div>
        This is UsersList
      </div>
    )
  }
}

export default UsersList