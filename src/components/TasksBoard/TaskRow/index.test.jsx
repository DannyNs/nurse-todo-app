import React from 'react';
import { shallow } from 'enzyme';
import TaskRow from '.';

describe('TaskRow', () => {
  it('should render without crashing', () => {
    // given
    const name = 'Mark Darcy';
    const description = 'Give pills';
    const time = 1241241241;
    const done = false;
    const markAsDone = () => {};

    // when
    const wrapper = shallow(
      <TaskRow
        name={name}
        description={description}
        time={time}
        done={done}
        markAsDone={markAsDone}
      />,
    );

    // then
    expect(wrapper).toMatchSnapshot();
  });
});
