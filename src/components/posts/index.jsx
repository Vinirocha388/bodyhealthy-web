import styles from './posts.module.css';

const Post = ({ titulo, descricao, imgLink, imgAlt }) => {
    return (
        <div className={styles.post}>
            <div className={styles.profileIconDiv}>
                <img className={styles.profileIcon} src={imgLink} alt={imgAlt} />
            </div>
            <div className={styles.postContent}>
                <h1 className={styles.title}>{titulo}</h1>
                <p className={styles.description}>{descricao}</p>
            </div>
        </div>
    )
}

export default Post;