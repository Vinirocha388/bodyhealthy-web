import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './dicas.module.css';

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