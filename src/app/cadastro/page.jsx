"use client";

import styles from "./cadastro.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Cadastro() {
  const [formData, setFormData] = useState({
    userName: "",
    name: "",
    email: "",
    password: "",
    cellPhone: "",
    age: "",
    sex: "",
    height: "",
    weight: "",
    descriptionObjective: "",
    restriction: "",
    conditioning: "",
  });

  const url = process.env.NEXT_PUBLIC_API_URL

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(`${url}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: formData.userName,
          name: formData.name,
          email: formData.email,
          password: formData.password, // Note: In a real app, password should be hashed server-side
          cellPhone: formData.cellPhone,
          age: parseInt(formData.age),
          sex: formData.sex,
          height: parseFloat(formData.height),
          weight: parseFloat(formData.weight),
          descriptionObjective: formData.descriptionObjective,
          restriction: formData.restriction,
          conditioning: formData.conditioning
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao criar usuário");
      }

      setSuccess(true);
      // Optionally redirect to conclusion page
      window.location.href = "/";
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.cadastroImagem}>
        <h1 className={styles.cadastroTitle}>Cadastro</h1>
        <div className={styles.cadastroContainer}>
          <div className={styles.cadastroContainerDiv}>
            <div className={styles.cadastroProfileImage}>
              <img
                src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
                alt="Profile"
                className={styles.cadastroProfileImage}
              />
            </div>

            <form onSubmit={handleSubmit}>
              <div className={styles.cadastroUsername}>
                <h2>Nome de Usuário:</h2>
                <input
                  name="userName"
                  type="text"
                  placeholder="Nome de Usuário"
                  className={styles.cadastroUsernameInput}
                  value={formData.userName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.cadastroName}>
                <h2>Nome:</h2>
                <input
                  name="name"
                  type="text"
                  placeholder="Nome"
                  className={styles.cadastroNameInput}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.cadastroEmail}>
                <h2>Email:</h2>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className={styles.cadastroEmailInput}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.cadastroSenha}>
                <h2>Senha:</h2>
                <input
                  name="password"
                  type="password"
                  placeholder="Senha"
                  className={styles.cadastroSenhaInput}
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.cadastroTelefone}>
                <h2>Telefone:</h2>
                <input
                  name="cellPhone"
                  type="tel"
                  placeholder="Telefone"
                  className={styles.cadastroTelefoneInput}
                  value={formData.cellPhone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.cadastroIdade}>
                <h2>Idade:</h2>
                <input
                  name="age"
                  type="number"
                  placeholder="Idade"
                  className={styles.cadastroIdadeInput}
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.cadastroSexo}>
                <h2>Sexo:</h2>
                <select
                  name="sex"
                  className={styles.cadastroSexoInput}
                  value={formData.sex}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Selecione seu sexo
                  </option>
                  <option value="Masculino">Masculino</option>
                  <option value="Feminino">Feminino</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>

              <div className={styles.cadastroAltura}>
                <h2>Altura:</h2>
                <input
                  name="height"
                  type="number"
                  step="0.01"
                  placeholder="Altura (m)"
                  className={styles.cadastroAlturaInput}
                  value={formData.height}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.cadastroPeso}>
                <h2>Peso:</h2>
                <input
                  name="weight"
                  type="number"
                  step="0.1"
                  placeholder="Peso (kg)"
                  className={styles.cadastroPesoInput}
                  value={formData.weight}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.cadastroObjetivo}>
                <h2>Objetivo:</h2>
                <textarea
                  name="descriptionObjective"
                  placeholder="Descreva seu objetivo"
                  className={styles.cadastroObjetivoInput}
                  value={formData.descriptionObjective}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.cadastroRestricao}>
                <h2>Restrições:</h2>
                <textarea
                  name="restriction"
                  placeholder="Descreva suas restrições"
                  className={styles.cadastroRestricaoInput}
                  value={formData.restriction}
                  onChange={handleChange}
                />
              </div>
              
              <div className={styles.cadastroCondicionamento}>
                <h2>Nível de Condicionamento:</h2>
                <select
                  name="conditioning"
                  className={styles.cadastroCondicionamentoInput}
                  value={formData.conditioning}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Selecione seu nível de condicionamento
                  </option>
                  <option value="Iniciante">Iniciante</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Avançado">Avançado</option>
                </select>
              </div>

              <div className={styles.cadastroEnviar}>
                <button type="submit" className={styles.cadastroButton}>
                  Enviar
                </button>
              </div>

              {error && <p className={styles.error}>{error}</p>}
              {success && <p className={styles.success}>Usuário criado com sucesso!</p>}
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}