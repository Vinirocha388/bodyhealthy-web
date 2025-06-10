"use client";

import styles from "./cadastro.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import Titulo from "../components/Titulo";
import { useRouter } from "next/navigation";

export default function Cadastro() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    userName: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    cellPhone: "",
    age: "",
    sex: "",
    height: "",
    weight: "",
    descriptionObjective: "",
    restriction: "",
    conditioning: "",
  });

  const url = process.env.NEXT_PUBLIC_API_URL;
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getAgeFromDate = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (formData.password !== formData.confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

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
          password: formData.password,
          cellPhone: formData.cellPhone.replace(/\D/g, ""),
          age: getAgeFromDate(formData.age),
          sex: formData.sex,
          height: parseFloat(formData.height),
          weight: parseFloat(formData.weight),
          descriptionObjective: formData.descriptionObjective,
          restriction: formData.restriction,
          conditioning: formData.conditioning,
          restriction: formData.restriction,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Erro ao criar usuário");
      }

      setSuccess(true);
      router.push("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.cadastro}>
        <Titulo title="Cadastro" />

        <div className={styles.cadastroDiv}>
          <form onSubmit={handleSubmit}>
            <div className={styles.row}>
              {/* Primeira coluna */}
              <div className={styles.collumnOne}>
                <div className={styles.cadastroTopic}>
                  <h2 className={styles.topicTitle}>Nome:</h2>
                  <input
                    name="name"
                    type="text"
                    placeholder="Ex: João da Silva"
                    className={styles.cadastroEmailInput}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.cadastroTopic}>
                  <h2 className={styles.topicTitle}>Nome de Usuário:</h2>
                  <input
                    name="userName"
                    type="text"
                    placeholder="Ex: NomeDeUsuario"
                    className={styles.cadastroEmailInput}
                    value={formData.userName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.cadastroTopic}>
                  <h2 className={styles.topicTitle}>Email:</h2>
                  <input
                    name="email"
                    type="email"
                    placeholder="Ex: seuemail@gmail.com"
                    className={styles.cadastroEmailInput}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.cadastroTopic}>
                  <h2 className={styles.topicTitle}>Telefone:</h2>
                  <input
                    type="tel"
                    name="cellPhone"
                    placeholder="Ex: (11) 91234-5678"
                    className={styles.cadastroEmailInput}
                    value={formData.cellPhone}
                    onChange={(e) => {
                      let rawValue = e.target.value.replace(/\D/g, "");
                      if (rawValue.length > 11) rawValue = rawValue.slice(0, 11);
                      let formatted = "";
                      if (rawValue.length === 0) {
                        formatted = "";
                      } else if (rawValue.length <= 2) {
                        formatted = `(${rawValue}`;
                      } else if (rawValue.length <= 7) {
                        formatted = `(${rawValue.slice(0, 2)}) ${rawValue.slice(2)}`;
                      } else {
                        formatted = `(${rawValue.slice(0, 2)}) ${rawValue.slice(2, 7)}-${rawValue.slice(7)}`;
                      }
                      handleChange({ target: { name: "cellPhone", value: formatted } });
                    }}
                    maxLength={15}
                    required
                  />
                </div>

                <div className={styles.cadastroTopic}>
                  <h2 className={styles.topicTitle}>Senha:</h2>
                  <input
                    name="password"
                    type="password"
                    placeholder="Digite sua senha"
                    className={styles.cadastroSenhaInput}
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.cadastroTopic}>
                  <h2 className={styles.topicTitle}>Confirmar Senha:</h2>
                  <input
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirme sua senha"
                    className={styles.cadastroSenhaInput}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                  {formData.password !== formData.confirmPassword && (
                    <p className={styles.passwordError}>As senhas não coincidem.</p>
                  )}
                </div>


                <div className={styles.cadastroTopic}>
                  <h2 className={styles.topicTitle}>Objetivo:</h2>
                  <textarea
                    name="descriptionObjective"
                    placeholder="Ex: Ganho de Massa"
                    className={styles.cadastroObjetivoInput}
                    value={formData.descriptionObjective}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.cadastroTopic}>
                  <h2 className={styles.topicTitle}>Restrições:</h2>
                  <textarea
                    name="restriction"
                    placeholder="Ex: Nenhuma"
                    className={styles.cadastroObjetivoInput}
                    value={formData.restriction}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Segunda coluna */}
              <div className={styles.collumnTwo}>
                <div className={styles.cadastroTopicSecondCollumn}>
                  <h2 className={styles.topicTitle}>Sexo:</h2>
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

                <div className={styles.cadastroTopicSecondCollumn}>
                  <h2 className={styles.topicTitle}>Data de Nascimento:</h2>
                  <input
                    name="age"
                    type="date"
                    className={styles.cadastroDataInput}
                    value={formData.age}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.cadastroTopicSecondCollumn}>
                  <h2 className={styles.topicTitle}>Condicionamento:</h2>
                  <select
                    name="conditioning"
                    className={styles.cadastroSexoInput}
                    value={formData.conditioning}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Condicionamento
                    </option>
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                  </select>
                </div>

                <div className={styles.cadastroTopicSecondCollumn}>
                  <h2 className={styles.topicTitle}>Altura (cm):</h2>
                  <input
                    name="height"
                    type="number"
                    step="0.01"
                    placeholder="Ex: 175.5"
                    className={styles.cadastroAlturaInput}
                    value={formData.height}
                    onChange={handleChange}
                    max="300"
                    required
                  />
                </div>

                <div className={styles.cadastroTopicSecondCollumn}>
                  <h2 className={styles.topicTitle}>Peso (kg):</h2>
                  <input
                    name="weight"
                    type="number"
                    step="0.1"
                    placeholder="Ex: 70.2"
                    className={styles.cadastroPesoInput}
                    value={formData.weight}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className={styles.cadastroEnviar}>
              <button type="submit" className={styles.cadastroButton}>
                Enviar
              </button>
            </div>

            {error && formData.password === formData.confirmPassword && (
              <p className={styles.error}>{error}</p>
            )}
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
