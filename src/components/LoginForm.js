import React from 'react';

const LoginForm = props => {
  return (
    <div>
      <form onSubmit={null}>
        Username: <input type="text" name="username">
        <input type="submit" value="Submit">
      </form>
    </div>
  )
}

export default LoginForm