import React from 'react';
import PropType from 'prop-types';
import { observer } from 'mobx-react';
import Task from '../../stores/TaskStore/Task';

import TaskRow from './TaskRow';

import './index.scss';

const TasksBoard = observer(({ tasks }) => (
  <div className="hn-Tasks-board">
    {
      tasks
        .map(({
          id, name, description, time, done, markAsDone,
        }) => (
          <div className="hn-Tasks-board__child" key={id}>
            <TaskRow
              id={id}
              name={name}
              description={description}
              time={time}
              done={done}
              markAsDone={markAsDone}
            />
          </div>
        ))
    }
  </div>
));

TasksBoard.propTypes = {
  tasks: PropType.arrayOf(PropType.instanceOf(Task)).isRequired,
};

export default TasksBoard;
