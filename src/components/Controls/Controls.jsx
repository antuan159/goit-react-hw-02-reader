import React from 'react';
import PropTypes from 'prop-types';
import style from './Controls.module.css';

const Controls = ({ onBack, onNext }) => (
  <section className={style.controls}>
    <button className={style.button} type="button" onClick={onBack}>
      Назад
    </button>
    <button className={style.button} type="button" onClick={onNext}>
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  onBack: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default Controls;
