import styles from "./cadastro.module.css"
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function cadastro() {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.cadastroImagem}>
                <h1 className={styles.cadastroTitle}>Cadastro</h1>
            </main>
            <Footer />
        </div>  
    )
}