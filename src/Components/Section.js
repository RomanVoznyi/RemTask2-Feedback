import styles from "./Components.module.css";

const Section = ({ title, children }) => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </section>
  );
};

export default Section;
