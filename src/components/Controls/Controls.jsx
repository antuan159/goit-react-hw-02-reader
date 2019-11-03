import React from 'react';
import PropTypes from 'prop-types';
import style from './Controls.module.css';

const Controls = ({ onBack, onNext, stepMin, stepMax }) => (
  <section className={style.controls}>
    <button
      className={style.button}
      type="button"
      onClick={onBack}
      disabled={stepMin === 0 ? 'disabled' : false}
    >
      Назад
    </button>
    <button
      className={style.button}
      type="button"
      onClick={onNext}
      disabled={stepMin === stepMax ? 'disabled' : false}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  stepMax: PropTypes.number.isRequired,
  stepMin: PropTypes.number.isRequired,
  onBack: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default Controls;
