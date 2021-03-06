import React from 'react';
import { shallow } from 'enzyme';
import TasksBoard from '.';
import Task from '../../stores/TaskStore/Task';

describe('TasksBoard', () => {
  it('should render without crashing', () => {
    // give
    const tasks = [
      new Task({
        id: 1,
        name: 'Brian Adams',
        description: 'Change pillow',
        time: Date.parse('Aug 9, 1995'),
        done: true,
      }),
      new Task({
        id: 2,
        name: 'Bob Dylan',
        description: 'Make bed',
        time: Date.parse('Aug 9, 1995') + 1000,
        done: false,
      }),
    ];

    // when
    const wrapper = shallow(
      <TasksBoard tasks={tasks} />,
    );

    // then
    expect(wrapper).toMatchSnapshot();
  });
});
