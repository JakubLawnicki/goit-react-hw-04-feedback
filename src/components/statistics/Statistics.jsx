import styles from './statistics.module.css';
import PropTypes from 'prop-types';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  if (total === 0) {
    return <span className={styles['stat-item']}>There is no feedback</span>;
  }
  return (
    <div className={styles.statistics}>
      <span className={styles['stat-item']}>Good: {good}</span>
      <span className={styles['stat-item']}>Neutral: {neutral}</span>
      <span className={styles['stat-item']}>Bad: {bad}</span>
      <span className={styles['stat-item']}>Total: {total}</span>
      <span className={styles['stat-item']}>
        Positive feedback: {positivePercentage}%
      </span>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
