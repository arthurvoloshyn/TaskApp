import { CHANGE_FILTER } from '../constants';
import { load } from 'redux-localstorage-simple';

let BASE_FILTER = load({ namespace: 'todo-list' });

if (!BASE_FILTER || !BASE_FILTER.filters || !BASE_FILTER.filters.length) {
  BASE_FILTER = {
    filters: 'all'
  };
}

const filter = (state = BASE_FILTER.filters, { type, activeFilter }) => {
  switch (type) {
    case CHANGE_FILTER:
      return activeFilter;
    default:
      return state;
  }
};

export default filter;
