import React, { Component } from 'react';
import styles from './Statistics.module.css';

export class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  setRate = event => {
    const feedback = event.currentTarget.id;
    this.setState(prevState => {
      return { ...prevState, ...{ [feedback]: prevState[feedback] + 1 } };
    });
  };

  countTotalFeedback = () => {
    return this.state.bad + this.state.good + this.state.neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const totalRates = this.countTotalFeedback();
    const goodRates = this.state.good;
    return goodRates > 0 ? Math.round((goodRates / totalRates) * 100) : 0;
  };

  render() {
    return (
      <div className={styles.container}>
        <h2>Please leave feedback</h2>
        <div className={styles.wrapper}>
          <button id="good" onClick={this.setRate} className={styles.button}>
            Good
          </button>
          <button id="neutral" onClick={this.setRate} className={styles.button}>
            Neutral
          </button>
          <button id="bad" onClick={this.setRate} className={styles.button}>
            Bad
          </button>
        </div>
        <h2>Statistics</h2>
        <div>
          <p>Good {this.state.good}</p>
          <p>Neutral {this.state.neutral}</p>
          <p>Bad {this.state.bad}</p>
          <p>Total {this.countTotalFeedback()} </p>
          <p>Positive feedback {this.countPositiveFeedbackPercentage()}%</p>
        </div>
      </div>
    );
  }
}
