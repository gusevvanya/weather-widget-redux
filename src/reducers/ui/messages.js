import {
  ADD_MESSAGES,
  DELETE_MESSAGES,
} from '../../constants';

function addMessages(state, action) {
  const newMessage = {
    value: action.value,
    type: action.messageType,
  };

  let messages;
  if (state) {
    messages = [...state, newMessage];
  } else {
    messages = [newMessage];
  }
  return messages;
}

export default function (state = [], action) {
  switch (action.type) {
    case ADD_MESSAGES:
      return addMessages(state, action);
    case DELETE_MESSAGES:
      return [];
    default:
      return state;
  }
}
