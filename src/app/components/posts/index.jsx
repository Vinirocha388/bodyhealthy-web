"use client";
import { useState } from "react";
import { FaHeart, FaRegCommentDots } from "react-icons/fa";
import styles from "./posts.module.css";

const Post = ({ titulo, descricao, imgLink, imgAlt }) => {
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
    };

    return (
        <div className={styles.post}>
            <div className={styles.profileIconDiv}>
                <img className={styles.profileIcon} src={imgLink} alt={imgAlt} />
            </div>
            <div className={styles.postContent}>
                <h1 className={styles.title}>{titulo}</h1>
                <p className={styles.description}>{descricao}</p>
            </div>
            <div className={styles.icons}>
                <FaHeart 
                    className={styles.icon} 
                    onClick={toggleLike} 
                    color={liked ? "red" : "white"} 
                />
                <FaRegCommentDots className={styles.icon} color="white" />
            </div>
        </div>
    );
};

export default Post;
