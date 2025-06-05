import React from "react";
import styles from "./cardExercicios.module.css";
import Exercicios from "../Exercicios/index.jsx"

const CardExercicios = ({ explication, muscleGroup, muscleGroup2, titleWorkout, muscleGroupExplanation, muscleGroupExplanation2 }) => {
    return (
        <div className={styles.workoutContainer}>
            <div className={styles.textContainer}>
            <h2 className={styles.workoutTitle}>{explication}</h2>
            <p className={styles.workoutMuscleGroup}>
                <p className={styles.muscleGroupTitle}>{muscleGroup}: </p> {muscleGroupExplanation}
            </p>
            <p className={styles.workoutMuscleGroup2}>
                <p className={styles.muscleGroupTitle}>{muscleGroup2}: </p> {muscleGroupExplanation2}
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