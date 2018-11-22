import React from 'react';
import { shallow } from 'enzyme';
import NewTaskForm from '.';
import NewTask from '../../stores/TaskStore/NewTask';

describe('NewTaskForm', () => {
  it('should render without crashing', () => {
    // given
    const newTask = new NewTask();
    const addNewTask = () => {};

    // when
    const wrapper = shallow(
      <NewTaskForm addNewTask={addNewTask} newTask={newTask} />,
    );

    // then
    expect(wrapper).toMatchSnapshot();
  });
});
