import Section from './section/Section.jsx';
import Statistics from './statistics/Statistics.jsx';
import FeedbackOptions from './feedbackOptions/FeedbackOptions.jsx';
import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  names = {
    respGood: 'good',
    respNeutr: 'neutral',
    respBad: 'bad',
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  countPositiveFeedbackPercentage() {
    return (
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
      100
    ).toFixed(0);
  }

  incr = name => {
    const key = name;

    this.setState(prev => {
      let prevValue;
      const values = Object.keys(prev);

      for (const value of values) {
        if (value === key) {
          prevValue = prev[value];
        }
      }

      return {
        [key]: prevValue + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { respGood, respNeutr, respBad } = this.names;

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          alignItems: 'start',
          fontSize: 40,
          color: '#010101',
          margin: 40,
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={{ respGood, respNeutr, respBad }}
            onLeaveFeedback={this.incr}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}
