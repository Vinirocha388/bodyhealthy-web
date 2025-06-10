"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./usuario.module.css";
import Titulo from "../components/Titulo";
import { useState } from "react";

export default function Usuario() {
  const [goal, setGoal] = useState("");
  const [bodyLevel, setBodyLevel] = useState("");
  const [weight, setWeight] = useState("");
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("")
  const [age, setAge] = useState("")
  const [restrictions, setRestrictions] = useState("")
  const [height, setHeight] = useState("")
  const [username, setUsername] = useState("")

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    if (isEditing) {
    }
    setIsEditing(!isEditing);
  };

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
              alt="Editar foto do usuário"
            />
          </div>
          <p className={styles.firstCollumnTopicTitle}>Nome Completo</p>
          <input
            className={styles.firstCollumnTopicText}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ex: Miguel Sarti"
            disabled={!isEditing}
          />
          <p className={styles.firstCollumnTopicTitle}>Nome de Usuário</p>
          <input
            className={styles.firstCollumnTopicText}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Ex: miguel_sarti"
            disabled={!isEditing}
          />
          <p className={styles.firstCollumnTopicTitle}>Email</p>
          <p className={styles.firstCollumnTopicText}>Ex: example@gmail.com</p>
          <p className={styles.firstCollumnTopicTitle}>Senha:</p>
          <input
            className={styles.firstCollumnTopicText}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="*******"
            disabled={!isEditing}
          />
          <div className={styles.ageAndGender}>
            <div className={styles.firstCollumnPart}>
              <p className={styles.firstCollumnTopicTitle}>Idade</p>
              <input
                className={styles.firstCollumnTopicText}
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Ex: 18"
                disabled={!isEditing}
              />
            </div>
            <div className={styles.firstCollumnPart}>
              <p className={styles.firstCollumnTopicTitle}>Condicionamento</p>
              <select
                className={styles.firstCollumnTopicText}
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                disabled={!isEditing}
              >
                <option value="" disabled>
                  Gênero
                </option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
                <option value="Outro">Outro</option>
              </select>
            </div>
          </div>
        </div>

        <div className={styles.secondCollumn}>
          <button
            className={isEditing ? styles.editButtonOn : styles.editButton}
            onClick={handleEditClick}
          >
            {isEditing ? "Salvar" : "Editar"}
          </button>

          <div className={styles.secondCollumnDiv}>
            <div className={styles.secondCollumnTopicDiv}>
              <p className={styles.secondCollumnTopicTitle}>Telefone</p>
              <input
                className={styles.secondCollumnTopicText}
                type="tel"
                value={telephone}
                onChange={(e) => {
                  let rawValue = e.target.value.replace(/\D/g, "");

                  if (!rawValue) {
                    setTelephone("");
                    return;
                  }

                  if (rawValue.length > 11) {
                    rawValue = rawValue.slice(0, 11);
                  }

                  let formatted = "";

                  if (rawValue.length <= 2) {
                    formatted = `(${rawValue}`;
                  } else if (rawValue.length <= 7) {
                    formatted = `(${rawValue.slice(0, 2)}) ${rawValue.slice(2)}`;
                  } else {
                    formatted = `(${rawValue.slice(0, 2)}) ${rawValue.slice(2, 7)}-${rawValue.slice(7)}`;
                  }

                  setTelephone(formatted);
                }}

                maxLength={15}
                placeholder="Ex: (11) 91234-5678"
                disabled={!isEditing}
              />
            </div>

            <div className={styles.secondCollumnTopicDiv}>
              <p className={styles.secondCollumnTopicTitle}>Condicionamento</p>
              <select
                className={styles.secondCollumnTopicText}
                value={bodyLevel}
                onChange={(e) => setBodyLevel(e.target.value)}
                disabled={!isEditing}
              >
                <option value="" disabled>
                  Selecione seu nível
                </option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
            </div>

            <div className={styles.secondCollumnTopicDiv}>
              <p className={styles.secondCollumnTopicTitle}>Peso</p>
              <input
                className={styles.secondCollumnTopicText}
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Ex: 70 (kg)"
                disabled={!isEditing}
              />
            </div>

            <div className={styles.secondCollumnTopicDiv}>
              <p className={styles.secondCollumnTopicTitle}>Altura</p>
              <input
                className={styles.secondCollumnTopicText}
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Ex: 180 (cm)"
                disabled={!isEditing}
              />
            </div>

            <div className={styles.secondCollumnTopicDiv}>
              <p className={styles.secondCollumnTopicTitle}>Restrições</p>
              <input
                type="text"
                className={styles.secondCollumnTopicText}
                value={restrictions}
                onChange={(e) => setRestrictions(e.target.value)}
                placeholder="Ex: Leite"
                disabled={!isEditing}
              />
            </div>

            <div className={styles.secondCollumnTopicDiv}>
              <p className={styles.secondCollumnTopicTitle}>Objetivo</p>
              <textarea
                className={styles.secondCollumnTopicTextGoal}
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                placeholder="Ex: Emagrecimento"
                disabled={!isEditing}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
