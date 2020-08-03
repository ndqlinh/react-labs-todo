import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';
import { grey, green } from '@material-ui/core/colors';

function TodoItem(props) {
  const GreenCheckbox = withStyles({
    root: {
      color: grey[500],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

  return (
    <div className="todo-container">
      <FormControlLabel
        control={<GreenCheckbox checked={props.todo.isDone} name={props.todo.id.toString()} />}
        label={props.todo.name}
      />
      <IconButton aria-label="delete" color="secondary">
        <DeleteIcon />
      </IconButton>
    </div>
  );
}

export default TodoItem;
