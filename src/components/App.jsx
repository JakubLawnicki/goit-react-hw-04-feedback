import { Section } from './section/Section.jsx';
import { Statistics } from './statistics/Statistics.jsx';
import { FeedbackOptions } from './feedbackOptions/FeedbackOptions.jsx';
import { useState } from 'react';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const names = {
    respGood: 'good',
    respNeutr: 'neutral',
    respBad: 'bad',
  };

  const countTotalFeedback = good + neutral + bad;

  const countPositiveFeedbackPercentage = (
    (good / (good + neutral + bad)) *
    100
  ).toFixed(0);

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
          options={names}
          setGood={setGood}
          setNeutral={setNeutral}
          setBad={setBad}
          good={good}
          neutral={neutral}
          bad={bad}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      </Section>
    </div>
  );
}
