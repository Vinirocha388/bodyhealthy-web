import styles from "./gymSection.module.css";

const GymSection = ({ title, imageSrc, imageAlt, description }) => {
    return (
        <div className={styles.gymSection}>
            <h1 className={styles.gymTitle}>{title}</h1>
            <img src={imageSrc} alt={imageAlt} className={styles.gymImage} />
            <p className={styles.gymText}>{description}</p>
        </div>
    );
};

export default GymSection;