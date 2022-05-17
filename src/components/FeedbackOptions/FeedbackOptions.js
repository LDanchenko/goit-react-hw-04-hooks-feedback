import styles from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div className={styles.wrapper}>
    <button id="good" onClick={onLeaveFeedback} className={styles.button}>
      Good
    </button>
    <button id="neutral" onClick={onLeaveFeedback} className={styles.button}>
      Neutral
    </button>
    <button id="bad" onClick={onLeaveFeedback} className={styles.button}>
      Bad
    </button>
  </div>
);
