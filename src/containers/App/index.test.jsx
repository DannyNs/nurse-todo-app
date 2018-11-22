import React from 'react';
import { shallow } from 'enzyme';
import App from '.';
import tasksStore from '../../stores/TaskStore';

describe('App', () => {
  it('should render without crashing', () => {
    // given
    const title = 'Test 123';

    // when
    const wrapper = shallow(<App
      title={title}
      tasksStore={tasksStore}
    />);

    // then
    expect(wrapper).toMatchSnapshot();
  });
});
