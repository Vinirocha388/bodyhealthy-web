import Header from '@/components/Header';
import styles from './dicas.module.css';
import Footer from '@/components/Footer';

export default function dicas() {
    return (
        <div className={styles.dicas}>
            <main>
                <Header />
                <h1>Dicas</h1>
                <p>Essa é a página de dicas</p>
                <Footer />
            </main>
        </div>
    );
}