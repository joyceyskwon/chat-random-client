import React from 'react';

const Message = ({message}) => {

  return (
    <div className="ui card">
      <div className="ui card">
        {message.content}
      </div>
    </div>
  )

}

export default Message