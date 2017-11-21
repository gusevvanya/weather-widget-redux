import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MessageList from './MessageList';

Enzyme.configure({ adapter: new Adapter() });

describe('MessageList', () => {
  let props;
  let messageListMount;
  let messageListShallow;

  beforeAll(() => {
    props = {
      onClearMessageClick: jest.fn(),
      messages: [{ value: 'New massage', type: 'success' }],
    };
  });

  beforeEach(() => {
    props.onClearMessageClick.mockClear();
    messageListMount = Enzyme.mount(<MessageList {...props} />);
    messageListShallow = Enzyme.shallow(<MessageList {...props} />);
  });

  it('Should render', () => {
    expect(messageListShallow.debug()).toMatchSnapshot();
  });

  it('onClearMessageClick function should be fired after clicking on the close button', () => {
    messageListMount.find('button').simulate('click');
    expect(props.onClearMessageClick.mock.calls.length).toBe(1);
  });

  it('Render messageList if the param "messages" recived', () => {
    expect(messageListMount.find('.messageList').length).toBe(1);
  });

  it('Dont\'t render messageList if the param "messages" is not recived', () => {
    messageListMount.setProps({ messages: [] });
    expect(messageListMount.find('.messageList').length).toBe(0);
  });
});
