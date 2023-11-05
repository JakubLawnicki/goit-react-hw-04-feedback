import styles from './feedbackOptions.module.css';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const { respGood, respNeutr, respBad } = options;

  return (
    <ul className={styles.buttons}>
      <li>
        <button
          className={styles.button}
          type="button"
          name={respGood}
          onClick={e => {
            return onLeaveFeedback(e.currentTarget.name);
          }}
        >
          {respGood.toUpperCase()}
        </button>
      </li>
      <li>
        <button
          className={styles.button}
          type="button"
          name={respNeutr}
          onClick={e => {
            return onLeaveFeedback(e.currentTarget.name);
          }}
        >
          {respNeutr.toUpperCase()}
        </button>
      </li>
      <li>
        <button
          className={styles.button}
          type="button"
          name={respBad}
          onClick={e => {
            return onLeaveFeedback(e.currentTarget.name);
          }}
        >
          {respBad.toUpperCase()}
        </button>
      </li>
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};
