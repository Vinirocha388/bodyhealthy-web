import styles from "./titulo.module.css";

const Titulo = ({ title }) => {
    return (
            <h1 className={styles.title}>{title}</h1>
    );
};

export default Titulo;