import { load } from 'redux-localstorage-simple';

import { CHANGE_FILTER } from '../constants/constants';
import { FilterActionType } from '../types/actions';
import { Filter } from '../types/store';

const savedFilters: any = load({ namespace: 'todo-list' });

const initialState: Filter = savedFilters && savedFilters.filters ? savedFilters.filters : 'all';

const filter = (state = initialState, { type, payload }: FilterActionType): Filter => {
  switch (type) {
    case CHANGE_FILTER:
      return payload.activeFilter;
    default:
      return state;
  }
};

export default filter;
