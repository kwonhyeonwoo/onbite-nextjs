import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const onClick = ()=>{
    router.push('/test');
  }
  return (
    <>
        <header>
          <Link href="/">Home</Link>
          <Link href="/search">Search</Link>
          <Link href="/book/1">Book/1</Link>
          <div>
            <button onClick={onClick}>/test로 이동</button>
          </div>
        </header>
        <Component {...pageProps} />
    </>
  );
}
