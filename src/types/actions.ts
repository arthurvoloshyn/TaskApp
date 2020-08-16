import { ACTION_TYPES } from '../constants/constants';

import { Filter, ITask } from './store';

interface IAddTaskAction {
  type: typeof ACTION_TYPES.ADD_TASK;
  payload: ITask;
}

interface IRemoveTaskAction {
  type: typeof ACTION_TYPES.REMOVE_TASK;
  payload: {
    id: number;
  };
}

interface ICompleteTaskAction {
  type: typeof ACTION_TYPES.COMPLETE_TASK;
  payload: {
    id: number;
  };
}

interface IChangeFilterAction {
  type: typeof ACTION_TYPES.CHANGE_FILTER;
  payload: {
    activeFilter: Filter;
  };
}

export type TaskActionTypes = IAddTaskAction | IRemoveTaskAction | ICompleteTaskAction;
export type FilterActionType = IChangeFilterAction;
