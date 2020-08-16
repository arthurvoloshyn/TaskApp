import { FilterBtn } from '../types/constants';

export enum ACTION_TYPES {
  ADD_TASK = 'ADD_TASK',
  REMOVE_TASK = 'REMOVE_TASK',
  COMPLETE_TASK = 'COMPLETE_TASK',
  CHANGE_FILTER = 'CHANGE_FILTER',
}

export const FILTERS_BTN: FilterBtn[] = [
  {
    text: 'All',
    id: 'all',
  },
  {
    text: 'Active',
    id: 'active',
  },
  {
    text: 'Completed',
    id: 'completed',
  },
];
