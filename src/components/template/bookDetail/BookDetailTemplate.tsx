import React from "react";
import styles from "./css/index.module.css";
import { BookData } from "@/interfaces/book-types";

export default function BookDetailTemplate({
  book,
}: {
  book: BookData | null;
}) {
  if (!book) return "문제가 발생하였습니다.";
  const { title, subTitle, description, author, publisher, coverImgUrl } = book;
  return (
    <div className={styles.container}>
      <div
        style={{ backgroundImage: `url('${coverImgUrl}')` }}
        className={styles.coverImgBox}
      >
        <img src={coverImgUrl} alt="" />
      </div>
      <div className={styles.descBox}>
        {/* 제목, 부제목, author, 내용 */}
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.subBox}>
          <p className={styles.subTitle}>{subTitle}</p>
          <p className={styles.author}>
            {author} | {publisher}
          </p>
        </div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
}
