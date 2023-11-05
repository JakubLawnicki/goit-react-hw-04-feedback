import styles from './section.module.css';
import PropTypes from 'prop-types';

export default function Section({ title, children }) {
  return (
    <>
      <h2 className={styles.heading}>{title}</h2>
      {children}
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};
