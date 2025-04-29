import styles from "./frequentlyContainer.module.css";

const FrequentlyContainer = ({ question, answer }) => {
    return (
        <details className={styles.questionItem}>
            <summary className={styles.questionSummary}>
                <strong>{question}</strong>
            </summary>
            <p className={styles.questionAnswer}>{answer}</p>
        </details>
    );
};

export default FrequentlyContainer;