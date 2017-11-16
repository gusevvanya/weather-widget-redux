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

  it('should render', () => {
    expect(messageListShallow.debug()).toMatchSnapshot();
  });

  it('test buttonClickHandler method', () => {
    expect(props.onClearMessageClick.mock.calls.length).toBe(0);
    messageListMount.find('button').simulate('click');
    expect(props.onClearMessageClick.mock.calls.length).toBe(1);
  });

  it('render messageList if the param "messages" recived', () => {
    expect(messageListMount.find('.messageList').length).toBe(1);
    messageListMount.setProps({ messages: [] });
    expect(messageListMount.find('.messageList').length).toBe(0);
  });
});
