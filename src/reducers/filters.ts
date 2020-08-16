import { load } from 'redux-localstorage-simple';

import { ACTION_TYPES } from '../constants/constants';

import { FilterActionType } from '../types/actions';
import { Filter } from '../types/store';

const savedFilters: any = load({ namespace: 'todo-list' });

const initialState: Filter = savedFilters && savedFilters.filters ? savedFilters.filters : 'all';

const filter = (state = initialState, { type, payload }: FilterActionType): Filter => {
  switch (type) {
    case ACTION_TYPES.CHANGE_FILTER:
      return payload.activeFilter;
    default:
      return state;
  }
};

export default filter;
