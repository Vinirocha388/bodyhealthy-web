import Header from '@/components/Header';
import styles from './login.module.css';
import Footer from '@/components/Footer';

export default function login() {
    return (
        <div className={styles.container}>
            <Header />
            <main>
                <h1>Login</h1>
                <p>conteúdo do login estará aqui</p>
            </main>
            <Footer />
        </div>
    );
}