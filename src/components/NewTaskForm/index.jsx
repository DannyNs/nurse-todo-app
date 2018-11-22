import React from 'react';
import PropType from 'prop-types';
import { observer } from 'mobx-react';
import NewTask from '../../stores/TaskStore/NewTask';

import './index.scss';

const NewTaskForm = observer(({
  addNewTask,
  newTask,
}) => (
  <div className="nr-new-task-form">
    <div className="nr-new-task-form__labels">
      <div>Name:</div>
      <div>Description:</div>
    </div>
    <div className="nr-new-task-form__content">
      <div>
        <input
          type="text"
          name="name"
          value={newTask.name}
          onChange={e => newTask.setName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          name="description"
          value={newTask.description}
          onChange={e => newTask.setDescription(e.target.value)}
        />
      </div>
      <div>
        <button type="submit" onClick={() => addNewTask(newTask)}>
          Add
        </button>
      </div>
    </div>
  </div>
));

NewTaskForm.propTypes = {
  addNewTask: PropType.func.isRequired,
  newTask: PropType.instanceOf(NewTask).isRequired,
};

export default NewTaskForm;
