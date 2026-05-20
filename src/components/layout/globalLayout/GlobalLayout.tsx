import Footer from "../footer/Footer";
import Header from "../heaer/Header";
import styles from "./index.module.css";

export default function GlobalLayout({children}:{children:React.ReactNode}){
    return (
        <div className={styles.container}>
            <Header/>
            <main className={styles.main}>
                {children}
            </main>
            <Footer/>
        </div>
    )
}