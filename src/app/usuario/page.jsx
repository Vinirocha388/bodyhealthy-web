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
              src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
              alt="Foto de perfil do usuário"
            />
            <img
              className={styles.perfilPhotoEdit}
              src="https://cdn-icons-png.flaticon.com/512/4226/4226577.png"
              alt="Foto de perfil do usuário"
            />
          </div>
          <p className={styles.firstCollumnTopicTitle}>Nome Completo</p>
          <p className={styles.firstCollumnTopicText}>Ex: Vitor de Almeida Argeri</p>
          <p className={styles.firstCollumnTopicTitle}>Nome de Usuário:</p>
          <p className={styles.firstCollumnTopicText}>Ex: Vittorit</p>
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