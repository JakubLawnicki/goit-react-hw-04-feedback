import styles from './feedbackOptions.module.css';
import PropTypes from 'prop-types';

export function FeedbackOptions({
  options,
  good,
  neutral,
  bad,
  setGood,
  setNeutral,
  setBad,
}) {
  const { respGood, respNeutr, respBad } = options;

  return (
    <ul className={styles.buttons}>
      <li>
        <button
          className={styles.button}
          type="button"
          name={respGood}
          onClick={() => setGood(good + 1)}
        >
          {respGood.toUpperCase()}
        </button>
      </li>
      <li>
        <button
          className={styles.button}
          type="button"
          name={respNeutr}
          onClick={() => setNeutral(neutral + 1)}
        >
          {respNeutr.toUpperCase()}
        </button>
      </li>
      <li>
        <button
          className={styles.button}
          type="button"
          name={respBad}
          onClick={() => setBad(bad + 1)}
        >
          {respBad.toUpperCase()}
        </button>
      </li>
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  setGood: PropTypes.func,
  setNeutral: PropTypes.func,
  setBad: PropTypes.func,
};
