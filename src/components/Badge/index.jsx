import React from 'react';
import classNames from 'classnames';

import './Badge.scss';

const Badge = ({ name, onClick, id, colorId }) => (
  <i
    onClick={onClick}
    className={classNames('badge', { [`badge--${name}`]: name }, id === colorId ? 'active' : '')}
  ></i>
);

export default Badge;
