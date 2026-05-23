import Link from "next/link";
import styles from "./css/index.module.css";
import { BookData } from "@/interfaces/book-types";

export default function BookItem({
  id,
  title,
  subTitle,
  author,
  publisher,
  coverImgUrl,
}: BookData) {
  return (
    <Link href={`/book/${id}`} className={styles.container}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={coverImgUrl} alt={coverImgUrl} />
      <div className={styles.descBox}>
        <div className={styles.titleBox}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.subTitle}>{subTitle}</p>
        </div>
        <div className={styles.author}>
          {author} | {publisher}
        </div>
      </div>
    </Link>
  );
}