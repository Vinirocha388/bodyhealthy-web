import styles from "./treinos.module.css";

const Treinos = ({ titulo, objetivo, frequencia }) => {
    return (
        <div className={styles.treinos}>
            <div className={styles.treinosContent}>
                <h1 className={styles.title}>{titulo}</h1>
                <p className={styles.objective}><strong>Objetivo:</strong> {objetivo}</p>
                <p className={styles.frequency}><strong>Frequência:</strong> {frequencia}</p>
            </div>
        </div>
    );
}

export default Treinos;