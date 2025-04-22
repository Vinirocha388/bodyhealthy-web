import styles from "./conclusaoCadastro.module.css"
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function conclusaoCadastro() {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <h1 className={styles.conclusionLogo}>Body & Health</h1>
                <p className={styles.conclusionText}>Parabéns! Seu cadastro foi concluído com sucesso.
                    <br />
                    Agora você faz parte da comunidade Body & Health.
                    <br />
                    <br />
                    Aproveite tudo que preparamos para você!
                </p>
                <Link href={"./"} className={styles.conclusionLink}>
                    <button className={styles.conclusionButton}>Voltar para Página Inicial</button>  
                </Link>
            </main>
            <Footer />
        </div>  
    )
}