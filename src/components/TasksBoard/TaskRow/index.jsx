import React from 'react';
import PropType from 'prop-types';
import { observer } from 'mobx-react';

import './index.scss';

const TaskRow = observer(({
  id, name, description, time, done, markAsDone,
}) => (
  <div className="nr-task-row">
    <div className="nr-task-row__labels">
      <div>Name:</div>
      <div>Description:</div>
      <div>Date:</div>
      <div>Done:</div>
      <div>Button:</div>
    </div>
    <div className="nr-task-row__content">
      <div>
        <span>{id}</span>
        {name}
      </div>
      <div>{description}</div>
      <div>{new Date(time * 1000).toUTCString()}</div>
      <div>{done ? 'yes' : 'no'}</div>
      <div>
        <button type="button" onClick={markAsDone}>
          Done
        </button>
      </div>
    </div>
  </div>
));

TaskRow.propTypes = {
  id: PropType.number.isRequired,
  name: PropType.string.isRequired,
  description: PropType.string.isRequired,
  time: PropType.number.isRequired,
  markAsDone: PropType.func.isRequired,
};

export default TaskRow;
