import React from 'react';

import { ToDoItemProps } from './types';

import './todo-item.css';

const ToDoItem: React.FC<ToDoItemProps> = ({
  text = '',
  isCompleted = false,
  removeTask = () => {},
  id = 0,
  completeTask = () => {},
}): React.ReactElement<ToDoItemProps> => {
  const handleCompleteTask = (): void => {
    completeTask(id);
  };

  const handleRemoveTask = (): void => {
    removeTask(id);
  };

  return (
    <li className="todo-item">
      <i
        className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'}
        onClick={handleCompleteTask}
      />
      <span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
      <i className="fas fa-times" onClick={handleRemoveTask} />
    </li>
  );
};

export default ToDoItem;
