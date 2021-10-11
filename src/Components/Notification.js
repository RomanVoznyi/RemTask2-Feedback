import styles from "./Components.module.css";

const Notification = ({ message }) => {
    return <p className={styles.message}>{message}</p>    
}

export default Notification