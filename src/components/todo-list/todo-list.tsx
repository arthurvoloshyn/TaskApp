import React from 'react';

import ToDoItem from '../todo-item/todo-item';

import { ITask } from '../../types/store';
import { ToDoListProps } from './types';

import './todo-list.css';

const ToDoList: React.FC<ToDoListProps> = ({ tasksList, removeTask, completeTask }) => (
  <ul className="todo-list">
    {tasksList.map(({ id, text, isCompleted }: ITask) => (
      <ToDoItem
        completeTask={completeTask}
        removeTask={removeTask}
        id={id}
        key={id}
        text={text}
        isCompleted={isCompleted}
      />
    ))}
  </ul>
);

export default ToDoList;
