import React from 'react';
import PropTypes from 'prop-types';

const MessageItem = ({ value, type }) => (
  <li className={type}>
    {value}
  </li>
);

MessageItem.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default MessageItem;
