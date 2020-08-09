import { ADD_TASK, CHANGE_FILTER, COMPLETE_TASK, REMOVE_TASK } from '../constants/constants';
import { Filter, ITask } from './store';

interface IAddTaskAction {
  type: typeof ADD_TASK;
  payload: ITask;
}

interface IRemoveTaskAction {
  type: typeof REMOVE_TASK;
  payload: {
    id: number;
  };
}

interface ICompleteTaskAction {
  type: typeof COMPLETE_TASK;
  payload: {
    id: number;
  };
}

interface IChangeFilterAction {
  type: typeof CHANGE_FILTER;
  payload: {
    activeFilter: Filter;
  };
}

export type TaskActionTypes = IAddTaskAction | IRemoveTaskAction | ICompleteTaskAction;
export type FilterActionType = IChangeFilterAction;
