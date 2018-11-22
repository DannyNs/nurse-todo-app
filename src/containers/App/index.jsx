import React from 'react';
import PropType from 'prop-types';
import { observer } from 'mobx-react';
import { TasksStore } from '../../stores/TaskStore';
import NewTask from '../../stores/TaskStore/NewTask';

import TasksBoard from '../../components/TasksBoard';
import NewTaskForm from '../../components/NewTaskForm';

import './index.scss';

@observer
class App extends React.Component {
  render() {
    const {
      title,
      tasksStore: {
        tasks, addNewTask,
      },
    } = this.props;

    return (
      <div className="nr-app">
        <div className="nr-app__controls">
          <h1 className="nr-app__controls--center">{title}</h1>
        </div>
        <NewTaskForm addNewTask={addNewTask} newTask={new NewTask()} />
        <hr />
        <TasksBoard tasks={tasks} />
      </div>
    );
  }
}

App.propTypes = {
  title: PropType.string.isRequired,
  tasksStore: PropType.instanceOf(TasksStore).isRequired,
};

export default App;
