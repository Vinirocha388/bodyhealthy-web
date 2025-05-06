import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./usuario.module.css";

export default function usuario() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.imagemUsuario}>
        <h1 className={styles.usuarioTitle}>Usuário</h1>

        <div className={styles.usuarioContainer}>
          <div className={styles.usuarioHeader}>
            <h2 className={styles.username}>@nomeusuario</h2>
            <img
              src="https://www.freeiconspng.com/uploads/white-gear-png-gear-icon-png-white-gear-icon-30.png"
              alt="gear"
              className={styles.gearImage}
            />
          </div>
          
          <div className={styles.usuarioContainerDiv}>

          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
