import React from 'react';

import { FILTERS_BTN } from '../../constants/constants';

import { FilterBtn } from '../../types/constants';
import { FooterProps } from './types';

import './footer.css';

const Footer: React.FC<FooterProps> = ({
  amount = 0,
  activeFilter = 'all',
  changeFilter = () => {},
}) => (
  <div className="footer">
    <span className="amount">{`${amount} Tasks left`}</span>
    <div className="btn-group">
      {FILTERS_BTN.map(({ text, id }: FilterBtn) => {
        const handleChangeFilter = () => changeFilter(id);

        return (
          <button
            onClick={handleChangeFilter}
            key={id}
            className={id === activeFilter ? 'filter-btn active' : 'filter-btn'}
          >
            {text}
          </button>
        );
      })}
    </div>
  </div>
);

export default Footer;
