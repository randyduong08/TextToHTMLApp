// ./src/app/index/ui/SubmitButton.js

import styles from './submitbutton.css';

export default function Page() {
  return (
    <div className={styles.container}>
      <button type="submit" className={styles.submitButton}>Submit</button>
    </div>
  );
}
