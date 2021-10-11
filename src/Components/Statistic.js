import styles from "./Components.module.css";

const Statistic = ({ good, neutral, bad,total,positive }) => {
    
  return (   
        <ul className={styles.statistics}> 
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedback: {positive}%</li>
        </ul>     
  );
};

export default Statistic;
