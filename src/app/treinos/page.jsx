import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './treinos.module.css';
import Treinos from '../components/Treinos';

export default function treinos() {
    return (
        <div className={styles.treinos}>
            <Header />
            <div className={styles.imagemTreinos}>
                <h1 className={styles.treinosTitle}>Treinos</h1>
            </div>
            <main>
                <Treinos />
            </main>
            <Footer />
        </div>
    );
}