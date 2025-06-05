import React from "react";
import styles from "./exercicios.module.css";

const Exercicios = ({ image, title, repetitions, text }) => {
    return (
        <div className={styles.workoutContainer}>
            <img src={image} alt={imageWorkout} className={styles.workoutImage} />
            <h2 className={styles.workoutTitle}>{title}</h2>
            <p className={styles.workoutRepetitions}>{repetitions}</p>
            <p className={styles.workoutText}>{text}</p>
        </div>
    );
};

export default Exercicios;