import { load } from 'redux-localstorage-simple';

import { ACTION_TYPES } from '../constants/constants';

import { TaskActionTypes } from '../types/actions';
import { stateTasks } from '../types/reducers';

const savedTasks: any = load({ namespace: 'task-app' });

const initialState: stateTasks = savedTasks?.tasks || [];

const tasks = (state = initialState, action: TaskActionTypes): stateTasks => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TASK:
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          isCompleted: action.payload.isCompleted,
        },
      ];
    case ACTION_TYPES.REMOVE_TASK:
      return [...state].filter(({ id }) => id !== action.payload.id);
    case ACTION_TYPES.COMPLETE_TASK:
      return [...state].map(task =>
        task.id === action.payload.id ? { ...task, isCompleted: !task.isCompleted } : task,
      );
    default:
      return state;
  }
};

export default tasks;
