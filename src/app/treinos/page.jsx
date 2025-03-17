import Footer from '@/components/Footer';
import styles from './treinos.module.css';
import Header from '@/components/Header';

export default function treinos() {
    return (
        <div className={styles.treinos}>
            <Header />
            <main>
                <h1>Treinos</h1>
                <p>Essa é a página de treinos</p>
            </main>
            <Footer />
        </div>
    );
}