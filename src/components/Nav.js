import React, { Component } from 'react';
// import { Link, withRouter } from 'react-router-dom'

class Nav extends Component {

  render() {
    return (
      <div className="nav">
        <h1>Chat Random</h1>
        {
        this.props.currentUser ?
          <h3>Welcome {this.props.currentUser.username}</h3>
        :
          ''
        }
      </div>
    )
  }

}

export default Nav