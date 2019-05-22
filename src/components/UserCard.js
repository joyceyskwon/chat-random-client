import React from 'react';

const UserCard = ({ user }) => {

  return (
    <div className="ui">
      <div>
        {user.username}
      </div>
    </div>
  )
}

export default UserCard