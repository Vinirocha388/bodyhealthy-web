import styles from "./frequentlyContainer.module.css";

const FrequentlyContainer = ({question, answer}) => {
    return (
        <details className={styles.frequentlyQuestionsContainer}>
            <summary className={styles.frequentlyQuestionsText}>{question}</summary>
            <p className={styles.frequentlyQuestionsAnswer}>{answer}</p>
        </details>
    )
}

export default FrequentlyContainer;