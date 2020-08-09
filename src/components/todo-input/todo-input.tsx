import React from 'react';

import { ToDoInputProps } from './types';

import './todo-input.css';

const ToDoInput: React.FC<ToDoInputProps> = ({
  value = '',
  onChange = () => {},
  onKeyPress = () => {},
}) => (
  <div className="todo-input-wrapper">
    <i className="fas fa-plus" />
    <input
      className="todo-input"
      placeholder="Click to add task"
      onChange={onChange}
      value={value}
      onKeyPress={onKeyPress}
    />
  </div>
);

export default ToDoInput;
