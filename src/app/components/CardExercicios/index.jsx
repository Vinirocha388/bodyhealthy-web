import React from "react";
import styles from "./cardExercicios.module.css";
import Exercicios from "../Exercicios/index.jsx"

const CardExercicios = ({ explication, muscleGroup, muscleGroup2, titleWorkout, muscleGroupExplanation, muscleGroupExplanation2, children }) => {
    return (
        <div className={styles.workoutContainer}>
            <div className={styles.textContainer}>
            <h2 className={styles.workoutTitle}>{explication}</h2>
            <p className={styles.workoutMuscleGroup}>
                <span className={styles.muscleGroupTitle}>{muscleGroup}: </span> {muscleGroupExplanation}
            </p>
            <p className={styles.workoutMuscleGroup2}>
                <span className={styles.muscleGroupTitle}>{muscleGroup2}: </span> {muscleGroupExplanation2}
            </p>
            <p className={styles.workoutTitleExercise}>{titleWorkout}</p>
            </div>
            <div className={styles.exercises}>
                {children}
            </div>
        </div>
    );
};

export default CardExercicios;