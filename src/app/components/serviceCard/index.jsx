import React from "react";
import styles from "./serviceCard.module.css";

const ServiceCard = ({ title, text }) => {
    return (
        <div className={styles.ourServicesContainer}>
            <h2 className={styles.exerciseTitle}>{title}</h2>
            <p className={styles.exerciseText}>{text}</p>
        </div>
    );
};

export default ServiceCard;