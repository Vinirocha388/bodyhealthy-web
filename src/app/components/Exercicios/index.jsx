import React from "react";
import styles from "./exercicios.module.css";

const Exercicios = ({ image, title, repetitions, text }) => {
    return (
        <div className={styles.workoutContainer}>

            <div className={styles.workoutImageContainer}>
                <img src={image} alt={image} className={styles.workoutImage} />
            </div>

            <div className={styles.workoutInfoContainer}>
                <h2 className={styles.workoutTitle}>{title}</h2>
                <p className={styles.workoutRepetitions}>{repetitions}</p>
            </div>

            <div className={styles.workoutTextContainer}>
                <p className={styles.workoutText}>{text}rrr</p>
            </div>
        </div>
    );
};

export default Exercicios;