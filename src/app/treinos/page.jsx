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
                <Treinos
                titulo={"Treino de Hipertrofia"}
                objetivo={"Ganho de massa muscular"}
                frequencia={"4-5 vezes por semana"}
                />
                <Treinos
                titulo={"Treino de Resistência"}
                objetivo={"Aumento de resistência física"}
                frequencia={"3-4 vezes por semana"}
                />
                <Treinos
                titulo={"Treino de Funcional"}
                objetivo={"Ganho de massa muscular"}
                frequencia={"3 vezes por semana"}
                />
                <Treinos
                titulo={"Treino de Hipertrofia"}
                objetivo={"Ganho de massa muscular"}
                frequencia={"5 vezes por semana"}
                />
            </main>
            <Footer />
        </div>
    );
}