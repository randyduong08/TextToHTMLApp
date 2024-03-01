import styles from './submitbutton.css';

export default function Page() {
  return (
    <div className={styles.container}>
      <button type="submit" className="submitButton">Submit</button>
    </div>
  );
}