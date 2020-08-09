import { load } from 'redux-localstorage-simple';

import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK } from '../constants/constants';
import { TaskActionTypes } from '../types/actions';
import { stateTasks } from '../types/reducers';

const savedTasks: any = load({ namespace: 'todo-list' });

const initialState: stateTasks = savedTasks && savedTasks.tasks ? savedTasks.tasks : [];

const tasks = (state = initialState, action: TaskActionTypes) => {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          isCompleted: action.payload.isCompleted,
        },
      ];
    case REMOVE_TASK:
      return [...state].filter(task => task.id !== action.payload.id);
    case COMPLETE_TASK:
      return [...state].map(task =>
        task.id === action.payload.id ? { ...task, isCompleted: !task.isCompleted } : task,
      );
    default:
      return state;
  }
};

export default tasks;
