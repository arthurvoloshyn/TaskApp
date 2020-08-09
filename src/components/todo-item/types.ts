import { TaskActionTypes } from '../../types/actions';

export type ToDoItemProps = {
  text?: string;
  isCompleted?: boolean;
  removeTask?: (id: number) => TaskActionTypes;
  id?: number;
  completeTask?: (id: number) => TaskActionTypes;
};
