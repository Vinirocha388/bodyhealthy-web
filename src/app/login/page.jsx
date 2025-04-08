import styles from "./login.module.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Link from "next/link";

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
              type="password"
              placeholder="Senha"
              className={styles.textBoxText}
            />
          </div>
          <div className={styles.loginTextDiv}>
            <div className={styles.loginTextCollumn}>
              <p className={styles.loginText}>Esqueci minha senha</p>
              <p className={styles.loginText}>
                Não tem uma conta? <Link href="/cadastro">Se cadastre na Body & Health</Link> 
              </p>
            </div>
            <div className={styles.buttonDiv}>
              <Link href="/conclusao" passHref>
                <button className={styles.button}>Entrar</button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}