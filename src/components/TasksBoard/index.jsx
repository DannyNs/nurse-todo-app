import React from 'react';
import PropType from 'prop-types';
import { observer } from 'mobx-react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Task from '../../stores/TaskStore/Task';

import TaskRow from './TaskRow';

import './index.scss';

const TasksBoard = observer(({ tasks }) => (
  <div className="hn-tasks-board">
    {
      tasks
        .map(({
          id, name, description, time, done, markAsDone,
        }) => (
          <Card key={id} className="hn-tasks-board__child">
            <CardContent>
              <TaskRow
                name={name}
                description={description}
                time={time}
                done={done}
                markAsDone={markAsDone}
              />
            </CardContent>
          </Card>
        ))
    }
  </div>
));

TasksBoard.propTypes = {
  tasks: PropType.arrayOf(PropType.instanceOf(Task)).isRequired,
};

export default TasksBoard;
