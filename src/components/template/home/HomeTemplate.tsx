import SearchBar from "@/components/SearchBar/SearchBar";
import styles from "./css/index.module.css";
import BookItem from "../../common/BookItem/BookItem";
import { BookData } from "@/interfaces/book-types";
import Head from "next/head";

interface Props {
  allBooks: BookData[];
  recoBooks: BookData[];
}
export default function HomeTemplate({ allBooks, recoBooks }: Props) {
  return (
    <>
      <Head>
        <title>한입북스</title>
        <meta property="og:image" content="/thumbnail.png"/>
        <meta property="og:title" content="한입북스"/>
        <meta property="og:description" content="한입북스에 등록 된 도서를 만나보세요."/>
      </Head>
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
    </>
  );
}
