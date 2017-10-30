export default function messages(state = null, action) {
  switch (action.type) {
    case 'ADD_MESSAGES':
      const newMessage = {
        value: action.value,
        type: action.messageType
      };

      let messages;
      if(state) {
        messages = [...state, newMessage];
      } else {
        messages = [newMessage];
      }

      return messages;
      
    case 'DELETE_MESSAGES':
      return null;

    default:
      return state;
  }
};
