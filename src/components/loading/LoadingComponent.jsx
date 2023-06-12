import styles from "./loading.module.css";

export default function LoadingComponent() {
  return (
    <section className={styles.loading__wrapper}>
      <span>Loading...</span>
    </section>
  )
}
