import React from "react";
import styles from "./css/index.module.css";
import { BookData } from "@/interfaces/book-types";
import Head from "next/head";

export default function BookDetailTemplate({
  book,
}: {
  book: BookData ;
}) {
  const { title, subTitle, description, author, publisher, coverImgUrl } = book;
  return (
    <>  
      <Head>
        <title>{title}</title>
        <meta property="og:image" content="/thumbnail.png"/>
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={description}/>
      </Head>
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
    </>
  );
}
