import BookItem from "@/components/common/BookItem/BookItem";
import styles from "./css/index.module.css";
import SearchBar from "@/components/SearchBar/SearchBar";

export default function SearchTemplate({books}:{books:BookData[]}) {
  return (
    <div className={styles.container}>
      <SearchBar />
      <section>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
}
