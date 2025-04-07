import styles from "./login.module.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function login() {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <h1 className={styles.logoText}>Body & Health</h1>
        <div className={styles.inputDiv}>
          <div className={styles.textBox}>
            <input
              type="text"
              placeholder="Endereço de e-mail ou nome de usuário"
              className={styles.textBoxText}
            />
          </div>
          <div className={styles.textBox}>
            <input
              type="text"
              placeholder="Senha"
              className={styles.textBoxText}
            />
          </div>
          <div className={styles.loginTextDiv}>
            <div className={styles.loginTextCollumn}>
              <p className={styles.loginText}>Esqueci minha senha</p>
              <p className={styles.loginText}>
                Não tem uma conta? Se cadastre na Body & Health
              </p>
            </div>
            <div className={styles.buttonDiv}>
              <button className={styles.button}>Entrar</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
