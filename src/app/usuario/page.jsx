import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./usuario.module.css";
import Titulo from "../components/Titulo";

export default function Usuario() {
  return (
    <div className={styles.container}>
      <Header />
      <Titulo title="Página do Usuário" />
      <main className={styles.userPage}>
        <div className={styles.firstCollumn}>
          <div className={styles.perfilPhotoDiv}>
            <img
              className={styles.perfilPhoto}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Lionel-Messi-Argentina-2022-FIFA-World-Cup_sharpness.jpg/250px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_sharpness.jpg"
              alt="Foto de perfil do usuário"
            />
            <img
              className={styles.perfilPhotoEdit}
              src="https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2024/08/26113635/cristiano-ronaldo-futebol-futuro-aposentadoria.jpg"
              alt="Foto de perfil do usuário"
            />
          </div>
          <p className={styles.firstCollumnTopicTitle}>Example</p>
          <p className={styles.firstCollumnTopicText}></p>
          <p className={styles.firstCollumnTopicTitle}>Example</p>
          <p className={styles.firstCollumnTopicText}></p>
        </div>
        <div className={styles.secondCollumn}>
          <div className={styles.editButton}>Edit</div>

          <p className={styles.secondCollumnTopicTitle}>Example</p>
          <p className={styles.secondCollumnTopicText}>Example</p>

          <p className={styles.secondCollumnTopicTitle}>Example</p>
          <p className={styles.secondCollumnTopicText}>Example</p>

          <p className={styles.secondCollumnTopicTitle}>Example</p>
          <p className={styles.secondCollumnTopicText}>Example</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}