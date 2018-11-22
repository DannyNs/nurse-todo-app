import React from 'react';
import PropType from 'prop-types';
import { observer } from 'mobx-react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

import NewTask from '../../stores/TaskStore/NewTask';

import './index.scss';

const NewTaskForm = observer(({
  addNewTask,
  newTask,
}) => (
  <div className="nr-new-task-form">
    <Grid container spacing={24}>

      <Grid item xs={5}>
        <Input
          placeholder="Name"
          name="name"
          value={newTask.name}
          className="nr-new-task-form__input"
          onChange={e => newTask.setName(e.target.value)}
        />
      </Grid>

      <Grid item xs={5}>
        <Input
          placeholder="Task"
          name="description"
          value={newTask.description}
          className="nr-new-task-form__input"
          onChange={e => newTask.setDescription(e.target.value)}
        />
      </Grid>

      <Grid item xs={2}>
        <Button variant="contained" className="nr-new-task-form__button" onClick={() => addNewTask(newTask)}>
          +
        </Button>
      </Grid>

    </Grid>
  </div>
));

NewTaskForm.propTypes = {
  addNewTask: PropType.func.isRequired,
  newTask: PropType.instanceOf(NewTask).isRequired,
};

export default NewTaskForm;
