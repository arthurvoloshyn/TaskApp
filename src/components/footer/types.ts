import { Filter } from '../../types/store';
import { FilterActionType } from '../../types/actions';

export type FooterProps = {
  amount?: number;
  activeFilter?: Filter;
  changeFilter?: (activeFilter: Filter) => FilterActionType;
};
