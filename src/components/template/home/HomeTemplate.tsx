import SearchBar from "@/components/SearchBar/SearchBar";
import styles from "./css/index.module.css";
import book from "@/mock/book.json";
import BookItem from "../../common/BookItem/BookItem";
export default function HomeTemplate(){
    return (
      <div className={styles.container}>
        <SearchBar />
        <section className={styles.section}>
            <h3>지금 추천하는 도서</h3>
            {book.map((book) => (
                <BookItem key={book.id} {...book} />
            ))}
        </section>
        <section className={styles.section}>
            <h3>등록 된 도서</h3>
            {book.map((book) => (
                <BookItem key={book.id} {...book} />
            ))}
        </section>
      </div>
    );
}