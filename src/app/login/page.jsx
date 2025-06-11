'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./login.module.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Button from "../components/Button";
import Link from "next/link";
import Titulo from "../components/Titulo";
import { useAuth } from "../context/AuthContext"; // Importa o contexto

export default function Login() {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const { login } = useAuth(); // Usa o login do contexto

  const handleLogin = async () => {
    setError(null);

    if (!emailOrUsername || !password) {
      setError("Preencha todos os campos.");
      return;
    }

    setIsLoading(true);

    try {
      const isEmail = emailOrUsername.includes("@");

      const result = await login(
        isEmail ? emailOrUsername : null,
        password,
        isEmail ? null : emailOrUsername
      );

      if (!result.success) {
        setError(result.message || "Usuário ou senha inválidos.");
      }
    } catch (err) {
      console.error("Erro ao fazer login:", err);
      setError("Erro ao conectar com o servidor.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <main>
        <Titulo title="Faça seu Login" />
        <div className={styles.inputDiv}>
          <div className={styles.textBox}>
            <input
              type="text"
              placeholder="Coloque seu endereço de e-mail"
              className={styles.textBoxText}
              value={emailOrUsername}
              onChange={(e) => setEmailOrUsername(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div className={styles.textBox}>
            <input
              type="password"
              placeholder="Senha"
              className={styles.textBoxText}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
          </div>

          {error && (
            <div className={styles.errorMessage}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z" />
              </svg>
              <span>{error}</span>
            </div>
          )}

          <div className={styles.loginTextDiv}>
            <div className={styles.loginTextCollumn}>
              <p className={styles.loginText}>
                Não tem uma conta? <br />{" "}
                <Link href="/cadastro">Se cadastre na Body & Health</Link>
              </p>
            </div>
            <div className={styles.buttonDiv} onClick={handleLogin}>
              <Button buttonText={isLoading ? "Entrando..." : "Entrar"} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
