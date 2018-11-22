import React from 'react';
import PropType from 'prop-types';
import { observer } from 'mobx-react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';

import './index.scss';

const TaskRow = observer(({
  name, description, time, done, markAsDone,
}) => (
  <div className="nr-task-row">
    <Grid container spacing={24}>
      <Grid item xs={6}>
        {time}
      </Grid>
      <Grid item xs={6}>
        {time}
      </Grid>
      <Grid item xs={8}>
        <Grid item xs={12} className="nr-task-row__name">
          {name}
        </Grid>
        <Grid item xs={12}>
          {description}
        </Grid>
      </Grid>
      <Grid item xs={4}>
        {
          done ? (
            <SvgIcon className="nr-task-row__done">
              <path d="M19.77 5.03l1.4 1.4L8.43 19.17l-5.6-5.6 1.4-1.4 4.2 4.2L19.77 5.03m0-2.83L8.43 13.54l-4.2-4.2L0 13.57 8.43 22 24 6.43 19.77 2.2z" />
            </SvgIcon>) : (
              <Button variant="contained" onClick={markAsDone}>
                Done
              </Button>
          )
        }
      </Grid>
    </Grid>
  </div>
));

TaskRow.propTypes = {
  name: PropType.string.isRequired,
  description: PropType.string.isRequired,
  time: PropType.number.isRequired,
  markAsDone: PropType.func.isRequired,
};

export default TaskRow;
