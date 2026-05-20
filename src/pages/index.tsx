import SearchBar from "@/components/SearchBar/SearchBar";
import styles from "./index.module.css";
export default function Home() {
  return (
    <section className={styles.section}>
      <SearchBar/>
      <h1 className={styles.title}>Hello World</h1>
    </section>
  );
}
