import Header from "@/components/Header";
import styles from "./servicos.module.css";
import Footer from "@/components/Footer";

export default function servicos() {
    return (
        <div className={styles.container}>
            <Header />
            <main>
                <h1>Serviços</h1>
                <p>conteúdo dos serviços estará aqui</p>
            </main>
            <Footer />
        </div>
    );
}