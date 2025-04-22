import styles from "./button.module.css";

const Button = ({buttonText}) => {
    return (
        <button className={styles.button}>
            {buttonText}
        </button>
    )
}

export default Button