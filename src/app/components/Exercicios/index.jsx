import React from "react";
import styles from "./exercicios.module.css";

const Exercicios = ({ image, title, workout, series, repetition, text, topic, number }) => {
    return (
        <div className={styles.workoutContainer}>

            <div className={styles.workoutImageContainer}>
                <img src={image} alt={image} className={styles.workoutImage} />
            </div>

            <div className={styles.workoutInfoContainer}>
                <h2 className={styles.workoutTitle}><span className={styles.topic}>{topic}</span> {title}</h2>
                <p className={styles.workout}>{workout}</p>
                <p className={styles.workoutSeries}>{series}</p>

                    <select
                        name={number}
                        className={styles.workoutSelectSeries}
                        required
                  >
                    <option value="" disabled>
                      Quantidade de Séries:
                    </option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>    
                  </select>

                  x
                  
                    <select
                        name={number}
                        className={styles.workoutSelectRepetition}
                        required
                  >
                    <option value="" disabled className={styles.option}>
                      Quantidade de Repetições:
                    </option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>


            </div>

            <div className={styles.workoutTextContainer}>
                <div className={styles.workoutTextContent}>
                <p className={styles.workoutText}>{text}</p>
                </div>
            </div>

        </div>
    );
};

export default Exercicios;