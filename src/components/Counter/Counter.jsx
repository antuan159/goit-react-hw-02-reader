import React from 'react';
import PropTypes from 'prop-types';
import style from './Counter.module.css';

const Counter = ({ step, maxCounter }) => (
  <p className={style.counter}>
    {step + 1}/{maxCounter}
  </p>
);

Counter.propTypes = {
  step: PropTypes.number.isRequired,
  maxCounter: PropTypes.number.isRequired,
};

export default Counter;
