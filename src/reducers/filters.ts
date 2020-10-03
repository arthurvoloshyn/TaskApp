import { ACTION_TYPES } from '../constants/constants';

import { FilterActionType } from '../types/actions';
import { Filter } from '../types/store';

const BASE_FILTER: Filter = 'all';

const filter = (state = BASE_FILTER, { type, payload }: FilterActionType): Filter => {
  switch (type) {
    case ACTION_TYPES.CHANGE_FILTER:
      return payload.activeFilter;
    default:
      return state;
  }
};

export default filter;
