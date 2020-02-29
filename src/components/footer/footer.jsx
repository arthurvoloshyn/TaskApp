import React from 'react';
import PropTypes from 'prop-types';

import { FILTERS_BTN } from '../../constants/constants';

import './footer.css';

const Footer = ({ amount, activeFilter, changeFilter }) => (
  <div className="footer">
    <span className="amount">{`${amount} Tasks left`}</span>
    <div className="btn-group">
      {FILTERS_BTN.map(({ text, id }) => (
        <button
          onClick={() => {
            changeFilter(id);
          }}
          key={id}
          className={id === activeFilter ? 'filter-btn active' : 'filter-btn'}
        >
          {text}
        </button>
      ))}
    </div>
  </div>
);

Footer.propTypes = {
  amount: PropTypes.number,
  activeFilter: PropTypes.string,
  changeFilter: PropTypes.func
};

Footer.defaultProps = {
  changeFilter: () => {},
  amount: 0,
  activeFilter: 'all'
};

export default Footer;
