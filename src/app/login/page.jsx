'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./login.module.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Link from "next/link";

export default function Login() {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      // Faz a requisição para o endpoint do backend
      const response = await fetch("https://bodyhealthy-back.onrender.com/user", {
        method: "GET",
      });

      const users = await response.json();

      if (!response.ok) {
        setError("Erro ao buscar dados do servidor.");
        return;
      }

      // Verifica se existe um usuário com o email/username e senha fornecidos
      const user = users.find(
        (u) =>
          (u.email === emailOrUsername || u.userName === emailOrUsername) &&
          u.password === password
      );

      if (!user) {
        setError("E-mail/nome de usuário ou senha incorretos.");
        return;
      }

      // Se o login for bem-sucedido, redireciona para /home
      router.push("/");
    } catch (err) {
      setError("Erro ao conectar com o servidor.");
      console.error(err);
    }
  };

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
              value={emailOrUsername}
              onChange={(e) => setEmailOrUsername(e.target.value)}
            />
          </div>
          <div className={styles.textBox}>
            <input
              type="password"
              placeholder="Senha"
              className={styles.textBoxText}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className={styles.errorMessage}>{error}</p>}

          <div className={styles.loginTextDiv}>
            <div className={styles.loginTextCollumn}>
              <p className={styles.loginText}>Esqueci minha senha</p>
              <p className={styles.loginText}>
                Não tem uma conta? <Link href="/cadastro">Se cadastre na Body & Health</Link>
              </p>
            </div>
            <div className={styles.buttonDiv}>
              <button className={styles.button} onClick={handleLogin}>Entrar</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}