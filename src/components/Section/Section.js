import styles from './Section.module.css';
export const Section = ({ title, children }) => (
  <div className={styles.container}>
    <h2>{title}</h2>
    {children}
  </div>
);
