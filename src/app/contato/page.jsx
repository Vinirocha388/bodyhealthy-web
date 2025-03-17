import Footer from '@/components/Footer';
import styles from './contato.module.css';
import Header from '@/components/Header';

export default function contato() {
    return (
        <div className={styles.contato}>
            <Header />
            <main>
                <h1>Contato</h1>
                <p>Essa é a página de contato</p>
            </main>
            <Footer />
        </div>
    );
}