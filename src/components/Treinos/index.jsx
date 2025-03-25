import styles from "./treinos.module.css";

const Treinos = ({ titulo, objetivo, frequencia }) => {
    return (
        <div className={styles.treinos}>
            <div className={styles.treinosContent}>
                <h1 className={styles.title}>{titulo}</h1>
                <p className={styles.objective}>{objetivo}</p>
                <p className={styles.frequency}>{frequencia}</p>
            </div>
        </div>
    );
}

export default Treinos;