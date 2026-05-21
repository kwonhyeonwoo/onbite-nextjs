import fetchBooks from "@/api/fetch-books";
import SearchTemplate from "@/components/template/search/SearchTemplate";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

export const getServerSideProps = async(context:GetServerSidePropsContext)=>{
    const q = context.query.q;
    const books = await fetchBooks(q as string);
    return {
      props: {
        books,
      },
    };
}

export default function Page({ books }:InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <SearchTemplate books={books} />;
}