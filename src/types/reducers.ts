import rootReducer from '../reducers';

import { ITask } from './store';

export type RootState = ReturnType<typeof rootReducer>;

export type stateTasks = ITask[];
