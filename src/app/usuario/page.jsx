import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./usuario.module.css";
import Titulo from "../components/Titulo";

export default function usuario() {
  return (
    <div className={styles.container}>
      <Header />
      <h1 className={styles.title}>Usuário</h1>
      <div className={styles.main}>
        <p className={styles.username}>@nomeusuario</p>
        <div className={styles.profileImgContainer}>
          <img src="https://cdn-icons-png.flaticon.com/512/8847/8847419.png" alt="Imagem de Perfil" className={styles.profileImg} />
        </div>
        <p className={styles.greetingsText}>Olá, <span className={styles.name}>Nome Selecionado</span></p>
        <div className={styles.buttonContainer}>
          <button className={styles.editProfile}>Editar Perfil</button>
        </div>
      </div>

      <div className={styles.interactions}>
        <div className={styles.postContainer}>
          <img src="https://images.icon-icons.com/2716/PNG/512/squares_four_icon_172869.png" alt="Posts" className={styles.postIcon} />
        </div>
        <div className={`${styles.postContainer} ${styles.postContainer2}`}>
          <img src="https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png" alt="Curtidas" className={styles.postIcon} />
        </div>
      </div>
      <Footer />
    </div>
  );
}