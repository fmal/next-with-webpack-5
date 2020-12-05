
import styles from './Test.module.css';

export default function Test({ children }) {

  return (
    <div className={styles.root}>
       {children}
    </div>
  );
}
