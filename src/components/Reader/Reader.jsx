import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Reader.module.css';
import Counter from '../Counter';
import Controls from '../Controls';
import Publication from '../Publication';

export default class Reader extends Component {
  static propTypes = {
    index: PropTypes.number,
    publications: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  static defaultProps = {
    index: 0,
  };

  state = {
    value: this.props.index,
  };

  handleBack = () => {
    this.setState(prevState => ({
      value: prevState.value === 0 ? prevState.value : prevState.value - 1,
    }));
  };

  handleNext = () => {
    this.setState(prevState => ({
      value:
        prevState.value === this.props.publications.length - 1
          ? prevState.value
          : prevState.value + 1,
    }));
  };

  render() {
    const { value } = this.state;
    const { publications } = this.props;

    return (
      <div className={style.reader}>
        <Controls onBack={this.handleBack} onNext={this.handleNext} />
        <Counter step={value} maxCounter={publications.length} />
        <Publication article={publications[value]} />
      </div>
    );
  }
}
