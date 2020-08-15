import { stateTasks } from '../../types/reducers';
import { TaskActionTypes } from '../../types/actions';

export type ToDoListProps = {
  tasksList: stateTasks;
  removeTask: (id: number) => TaskActionTypes;
  completeTask: (id: number) => TaskActionTypes;
};
