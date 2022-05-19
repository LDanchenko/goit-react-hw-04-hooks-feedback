import styles from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={styles.wrapper}>
    {options.map(option => (
      <button
        id={option}
        key={option}
        onClick={onLeaveFeedback}
        className={styles.button}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
