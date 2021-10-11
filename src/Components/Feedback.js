import styles from "./Components.module.css";

const Feedback = ({ handleClick }) => {
  return (
    <div className={styles.buttons}>
      <button
        className={styles.button}
        type="button"
        name="good"
        onClick={handleClick}
      >
        Good
      </button>
      <button
        className={styles.button}
        type="button"
        name="neutral"
        onClick={handleClick}
      >
        Neutral
      </button>
      <button
        className={styles.button}
        type="button"
        name="bad"
        onClick={handleClick}
      >
        Bad
      </button>
    </div>
  );
};

export default Feedback;
