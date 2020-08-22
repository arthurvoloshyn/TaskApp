import React from 'react';

import { ToDoInputProps } from './types';

import './todo-input.css';

const ToDoInput: React.FC<ToDoInputProps> = ({
  value = '',
  onChange = () => {},
  onKeyPress = () => {},
}): React.ReactElement<ToDoInputProps> => (
  <div className="todo-input-wrapper">
    <i className="fas fa-plus" />
    <input
      className="todo-input"
      onChange={onChange}
      onKeyPress={onKeyPress}
      placeholder="Click to add task"
      value={value}
    />
  </div>
);

export default ToDoInput;
