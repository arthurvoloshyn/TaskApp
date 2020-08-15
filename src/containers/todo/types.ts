import { Filter, ITask } from '../../types/store';
import { FilterActionType, TaskActionTypes } from '../../types/actions';
import { stateTasks } from '../../types/reducers';

export type ToDoProps = {
  changeFilter: (activeFilter: Filter) => FilterActionType;
  tasks: stateTasks;
  removeTask: (id: number) => TaskActionTypes;
  filters: Filter;
  completeTask: (id: number) => TaskActionTypes;
  addTask: (task: ITask) => TaskActionTypes;
};

export type ToDoState = {
  taskText: string;
};
