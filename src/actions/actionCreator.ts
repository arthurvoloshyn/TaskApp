import { ACTION_TYPES } from '../constants/constants';

import { FilterActionType, TaskActionTypes } from '../types/actions';
import { Filter, ITask } from '../types/store';

export const addTask = (task: ITask): TaskActionTypes => ({
  type: ACTION_TYPES.ADD_TASK,
  payload: {
    ...task,
  },
});

export const removeTask = (id: number): TaskActionTypes => ({
  type: ACTION_TYPES.REMOVE_TASK,
  payload: {
    id,
  },
});

export const completeTask = (id: number): TaskActionTypes => ({
  type: ACTION_TYPES.COMPLETE_TASK,
  payload: {
    id,
  },
});

export const changeFilter = (activeFilter: Filter): FilterActionType => ({
  type: ACTION_TYPES.CHANGE_FILTER,
  payload: {
    activeFilter,
  },
});
