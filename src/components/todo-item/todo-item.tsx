import React from 'react';
import classNames from 'classnames';

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

  const markClasses = classNames(
    'mark far',
    { 'fa-check-circle': isCompleted },
    { 'fa-circle': !isCompleted },
  );

  const textClasses = classNames('text', { completed: isCompleted });

  return (
    <li className="todo-item">
      <i className={markClasses} onClick={handleCompleteTask} />
      <span className={textClasses}>{text}</span>
      <i className="fas fa-times" onClick={handleRemoveTask} />
    </li>
  );
};

export default ToDoItem;
