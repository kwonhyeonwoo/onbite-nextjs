import fetchBooks from "@/api/fetch-books";
import fetchRandomBooks from "@/api/fetch-random-books";
import HomeTemplate from "@/components/template/home/HomeTemplate";
import { InferGetStaticPropsType } from "next";

export const getStaticProps = async () => {
  const [allbooks, recoBooks] = await Promise.all([
    fetchBooks(),
    fetchRandomBooks(),
  ]);
  return {
    props: {
      allbooks,
      recoBooks,
    },
    revalidate:3,
  };
};

export default function Home({
  allbooks,
  recoBooks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <HomeTemplate allBooks={allbooks} recoBooks={recoBooks} />;
}
