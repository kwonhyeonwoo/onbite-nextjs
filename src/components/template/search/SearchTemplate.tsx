import BookItem from "@/components/common/BookItem/BookItem";
import styles from "./css/index.module.css";
import book from "@/mock/book.json";
import SearchBar from "@/components/SearchBar/SearchBar";
export default function SearchTemplate() {
  return (
    <div className={styles.container}>
        <SearchBar/>
      <section>
        {book.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
}
