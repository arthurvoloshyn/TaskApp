import { ConnectedProps } from 'react-redux';

import { connector } from './todo';

export type ToDoProps = ConnectedProps<typeof connector>;

export type ToDoState = {
  taskText: string;
};
