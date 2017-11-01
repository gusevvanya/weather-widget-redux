import React from 'react';
import PropTypes from 'prop-types';

import MessageItem from './MessageItem';

const MessageList = ({ messages, onClearMessageClick }) => {
  if (!messages) return null;

  const buttonClickHandler = (e) => {
    e.preventDefault();
    onClearMessageClick();
  };
  const messagesList = messages.map((message, index) => (
    <MessageItem
      key={index}
      value={message.value}
      type={message.type}
    />
  ));

  return (
    messages && (
      <div className="messageList">
        <ul>
          {messagesList}
        </ul>
        <button
          onClick={buttonClickHandler}
        >
          x
        </button>
      </div>
    )
  );
};

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClearMessageClick: PropTypes.func.isRequired,
};

export default MessageList;
