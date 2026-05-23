import fetchBooks from "@/api/fetch-books";
import fetchOneBook from "@/api/fetch-one-book";
import BookDetailTemplate from "@/components/template/bookDetail/BookDetailTemplate";
import { GetServerSidePropsContext, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

export const getStaticProps = async (context: GetServerSidePropsContext) => {
  const id = context.params!.id;
  const book = await fetchOneBook(id as string);

  return {
    props: {
      book,
    },
  };
};

export const getStaticPaths = async () => {
  const books = await fetchBooks();
  const paths = books.map((book)=>({
    params:{id:String(book.id)}
  }))
  return {
    paths,
    fallback:true,
  };
};

export default function Page({
  book,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  if(router.isFallback) {
      return (
        <div>
          <Head>
          <title>한입북스</title>
          <meta property="og:image" content="/thumbnail.png"/>
          <meta property="og:title" content="한입북스"/>
          <meta property="og:description" content="한입북스에 등록 된 도서를 만나보세요."/>
          </Head>
          <p>Loading...</p>
        </div>
      )
  }
  if(!book) return '데이터에 문제가 생겼습니다.'
  return <BookDetailTemplate book={book} />;
}
