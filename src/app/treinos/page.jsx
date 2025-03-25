import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './treinos.module.css';

export default function treinos() {
    return (
        <div className={styles.treinos}>
            <Header />  
            <div className={styles.imagemTreinos}>
                <h1 className={styles.treinosTitle}>Treinosㅤㅤㅤㅤ</h1>
            </div>
            <main>
                <Treinos
                titulo={"Treino de Hipertrofia"}
                objetivo={"Objetivo: Ganho de massa muscular"}
                frequencia={"Frequência: 4-5 vezes por semana"}
                />
                <Treinos
                titulo={"Treino de Resistência"}
                objetivo={"Objetivo: Aumento de resistência física"}
                frequencia={"Frequência: 3-4 vezes por semana"}
                />
                <Treinos
                titulo={"Treino de Funcional"}
                objetivo={"Objetivo: Ganho de massa muscular"}
                frequencia={"Frequência: 3 vezes por semana"}
                />
                <Treinos
                titulo={"Treino de Hipertrofia"}
                objetivo={"Objetivo: Ganho de massa muscular"}
                frequencia={"Frequência: 5 vezes por semana"}
                />
            </main>
            <Footer />
        </div>
    );
}