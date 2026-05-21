import fetchOneBook from "@/api/fetch-one-book";
import BookDetailTemplate from "@/components/template/bookDetail/BookDetailTemplate"
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next"

export const getServerSideProps = async(context:GetServerSidePropsContext)=>{
    const id = context.params!.id;
    const book = await fetchOneBook(Number(id));

    return {
        props:{
            book
        }
    }
}

export default function Page({book}:InferGetServerSidePropsType<typeof getServerSideProps>){
    return <BookDetailTemplate book={book} />;
}