import React from 'react';

import { ToDoItemProps } from './types';

import './todo-item.css';

const ToDoItem: React.FC<ToDoItemProps> = ({
  text = '',
  isCompleted = false,
  removeTask = () => {},
  id = 0,
  completeTask = () => {},
}) => {
  const handleCompleteTask = () => completeTask(id);
  const handleRemoveTask = () => removeTask(id);

  return (
    <li className="todo-item">
      <i
        onClick={handleCompleteTask}
        className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'}
      />
      <span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
      <i onClick={handleRemoveTask} className="fas fa-times" />
    </li>
  );
};

export default ToDoItem;
