import SearchBar from "@/components/SearchBar/SearchBar";
import styles from "./css/index.module.css";
import book from "@/mock/book.json";
import BookItem from "../../common/BookItem/BookItem";

interface Props {
  allBooks: BookData[];
  recoBooks: BookData[];
}
export default function HomeTemplate({ allBooks, recoBooks }: Props) {
  return (
    <div className={styles.container}>
      <SearchBar />
      <section className={styles.section}>
        <h3>지금 추천하는 도서</h3>
        {recoBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section className={styles.section}>
        <h3>등록 된 도서</h3>
        {allBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
}