import fetchOneBook from "@/api/fetch-one-book";
import BookDetailTemplate from "@/components/template/bookDetail/BookDetailTemplate";
import { GetServerSidePropsContext, InferGetStaticPropsType } from "next";

export const getStaticProps = async (context: GetServerSidePropsContext) => {
  const id = context.params!.id;
  const book = await fetchOneBook(Number(id));

  return {
    props: {
      book,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: { id: "1" },
      },
      {
        params: { id: "2" },
      },
      {
        params: { id: "3" },
      },
    ],
    fallback: false,
  };
};

export default function Page({
  book,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <BookDetailTemplate book={book} />;
}
