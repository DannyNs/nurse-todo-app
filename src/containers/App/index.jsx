import React from 'react';
import PropType from 'prop-types';
import { observer } from 'mobx-react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

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
        <AppBar position="static" color="default">
          <Toolbar className="nr-app__title">
            <Typography variant="title">
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
        <Card className="nr-app__add-new-task">
          <CardContent>
            <NewTaskForm addNewTask={addNewTask} newTask={new NewTask()} />
          </CardContent>
        </Card>

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
