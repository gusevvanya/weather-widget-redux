export const addMessage = (value, type) => ({
  type: 'ADD_MESSAGES',
  value,
  messageType: type,
});

export const deleteMessages = () => ({
  type: 'DELETE_MESSAGES',
});
