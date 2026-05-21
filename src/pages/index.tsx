import fetchBooks from "@/api/fetch-books";
import fetchRandomBooks from "@/api/fetch-random-books";
import HomeTemplate from "@/components/template/home/HomeTemplate";
import { InferGetServerSidePropsType } from "next";
import { useEffect } from "react";

export const getServerSideProps = async()=>{
  const [allbooks, recoBooks] = await Promise.all([
    fetchBooks(), fetchRandomBooks(),
  ])
  return {
    props: {
      allbooks,
      recoBooks,
    },
  };
}


export default function Home({
  allbooks,
  recoBooks,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  useEffect(() => {
    console.log(allbooks);
  }, []);
  return <HomeTemplate allBooks={allbooks} recoBooks={recoBooks} />;
}
