import React from 'react';

import ToDoItem from '../todo-item/todo-item';

import { ITask } from '../../types/store';
import { ToDoListProps } from './types';

import './todo-list.css';

const ToDoList: React.FC<ToDoListProps> = ({
  tasksList = [],
  removeTask,
  completeTask,
}): React.ReactElement<ToDoListProps> => (
  <ul className="todo-list">
    {tasksList.map(({ id, text, isCompleted }: ITask) => (
      <ToDoItem
        key={id}
        completeTask={completeTask}
        id={id}
        isCompleted={isCompleted}
        removeTask={removeTask}
        text={text}
      />
    ))}
  </ul>
);

export default ToDoList;
