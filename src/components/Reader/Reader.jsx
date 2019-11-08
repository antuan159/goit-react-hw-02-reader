import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Reader.module.css';
import Counter from '../Counter';
import Controls from '../Controls';
import Publication from '../Publication';

export default class Reader extends Component {
  static propTypes = {
    publications: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  state = {
    index: 0,
  };

  handleChangePage = obj => {
    this.setState(prevState => ({
      index: obj === 'prev' ? prevState.index - 1 : prevState.index + 1,
    }));
  };

  render() {
    const { index } = this.state;
    const { publications } = this.props;

    return (
      <div className={style.reader}>
        <Controls
          onChangePage={this.handleChangePage}
          indexStart={index}
          indexEnd={publications.length - 1}
        />
        <Counter index={index} maxLength={publications.length} />
        <Publication article={publications[index]} />
      </div>
    );
  }
}
