"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./usuario.module.css";
import Titulo from "../components/Titulo";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Usuario() {
  const router = useRouter();

  const [goal, setGoal] = useState("");
  const [bodyLevel, setBodyLevel] = useState("");
  const [weight, setWeight] = useState("");
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [restrictions, setRestrictions] = useState("");
  const [height, setHeight] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  // Carregar dados do usuário do localStorage/API
  useEffect(() => {
    const loadUserData = async () => {
      try {
        // Obter dados do usuário do localStorage
        const userStr = localStorage.getItem("user");
        const token = localStorage.getItem("token");
        
        if (!userStr || !token) {
          router.push("/login");
          return;
        }
        
        const userData = JSON.parse(userStr);
        
        // Preencher os campos básicos com os dados do localStorage
        setUsername(userData.userName || "");
        setEmail(userData.email || "");
        
        // Obter dados completos da API
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://body-healthy.coolify.fps92.dev/";
        
        const response = await axios.get(`${apiUrl}/user/${userData.userName}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        
        const userDetails = response.data;
        
        // Preencher os campos com os dados do usuário
        setName(userDetails.name || "");
        setAge(userDetails.age?.toString() || "");
        setGender(userDetails.sex || "");
        setHeight(userDetails.height?.toString() || "");
        setWeight(userDetails.weight?.toString() || "");
        setGoal(userDetails.descriptionObjective || "");
        setRestrictions(userDetails.restriction || "");
        setBodyLevel(userDetails.conditioning || "");
        
        // Converter o número de telefone para string e formatar
        if (userDetails.cellPhone) {
          const phoneStr = userDetails.cellPhone.toString();
          let formatted = "";
          
          if (phoneStr.length >= 2) {
            formatted = `(${phoneStr.slice(0, 2)})`;
            if (phoneStr.length > 2) {
              formatted += ` ${phoneStr.slice(2, 7)}`;
              if (phoneStr.length > 7) {
                formatted += `-${phoneStr.slice(7)}`;
              }
            }
          }
          
          setTelephone(formatted);
        }
        
        setLoading(false);
      } catch (error) {
        console.error("Erro ao carregar dados do usuário:", error);
        setError("Erro ao carregar dados do usuário. Tente novamente mais tarde.");
        setLoading(false);
      }
    };
    
    loadUserData();
  }, [router]);

  const handleEditClick = async () => {
    // Se estiver em modo de edição, salvar alterações
    if (isEditing) {
      try {
        setLoading(true);
        
        // Obter token e userName do localStorage
        const userStr = localStorage.getItem("user");
        const token = localStorage.getItem("token");
        
        if (!userStr || !token) {
          router.push("/login");
          return;
        }
        
        const userData = JSON.parse(userStr);
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://body-healthy.coolify.fps92.dev/";
        
        // Preparar dados para atualização conforme a estrutura do backend
        const updateData = {
          name,
          age: age ? parseInt(age) : undefined,
          sex: gender,
          height: height ? parseFloat(height) : undefined,
          weight: weight ? parseFloat(weight) : undefined,
          descriptionObjective: goal,
          restriction: restrictions,
          conditioning: bodyLevel
        };
        
        // Incluir senha apenas se foi alterada
        if (password) {
          updateData.password = password;
        }
        
        // Enviar requisição PUT para atualizar o usuário
        await axios.put(
          `${apiUrl}/user/${userData.userName}`, 
          updateData,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        
        setSuccessMessage("Dados atualizados com sucesso!");
        setTimeout(() => setSuccessMessage(""), 3000);
        
        // Limpar senha após atualização
        setPassword("");
      } catch (error) {
        console.error("Erro ao atualizar dados:", error);
        setError("Erro ao atualizar dados. Tente novamente mais tarde.");
      } finally {
        setLoading(false);
      }
    }
    
    // Alternar modo de edição
    setIsEditing(!isEditing);
  };

  const handleLogout = () => {
    // Definir que estamos em processo de logout (para controle visual)
    setLoading(true);
    
    // Limpar todos os dados de autenticação
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    sessionStorage.removeItem("currentTreino");
    sessionStorage.removeItem("authToken");
    
    // Para garantir que cookies também sejam removidos
    document.cookie.split(";").forEach(cookie => {
      const [name] = cookie.trim().split("=");
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    });
    
    // Disparar evento para notificar outros componentes (como o Header)
    window.dispatchEvent(new Event("logout"));
    
    // Mostrar mensagem de feedback ao usuário
    setSuccessMessage("Logout realizado com sucesso!");
    
    // Redirecionar diretamente para login sem setTimeout
    router.push("/login");
    
    // Como backup, usar também a navegação direta do navegador
    // Isso garante que mesmo se houver algum problema com o router,
    // o redirecionamento ainda ocorrerá
    setTimeout(() => {
      window.location.href = "/login";
    }, 300);
  };

  const refreshUserData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Obter dados do usuário do localStorage
      const userStr = localStorage.getItem("user");
      const token = localStorage.getItem("token");
      
      if (!userStr || !token) {
        router.push("/login");
        return;
      }
      
      const userData = JSON.parse(userStr);
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://body-healthy.coolify.fps92.dev/";
      
      const response = await axios.get(`${apiUrl}/user/${userData.userName}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      const userDetails = response.data;
      
      // Preencher os campos com os dados do usuário
      setName(userDetails.name || "");
      setAge(userDetails.age?.toString() || "");
      setGender(userDetails.sex || "");
      setHeight(userDetails.height?.toString() || "");
      setWeight(userDetails.weight?.toString() || "");
      setGoal(userDetails.descriptionObjective || "");
      setRestrictions(userDetails.restriction || "");
      setBodyLevel(userDetails.conditioning || "");
      
      // Converter o número de telefone para string e formatar
      if (userDetails.cellPhone) {
        const phoneStr = userDetails.cellPhone.toString();
        let formatted = "";
        
        if (phoneStr.length >= 2) {
          formatted = `(${phoneStr.slice(0, 2)})`;
          if (phoneStr.length > 2) {
            formatted += ` ${phoneStr.slice(2, 7)}`;
            if (phoneStr.length > 7) {
              formatted += `-${phoneStr.slice(7)}`;
            }
          }
        }
        
        setTelephone(formatted);
      }
      
      setSuccessMessage("Dados atualizados com sucesso!");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      console.error("Erro ao atualizar dados do usuário:", error);
      setError("Erro ao atualizar dados. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  if (loading && !isEditing) {
    return (
      <div className={styles.container}>
        <Header />
        <div className={styles.loadingContainer}>
          <p>Carregando dados do usuário...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Header />
      <Titulo title="Página do Usuário" />
      
      {/* Mensagem de sucesso ou erro */}
      {successMessage && (
        <div className={styles.successMessage}>
          {successMessage}
        </div>
      )}
      {error && (
        <div className={styles.errorMessage}>
          {error}
          <button onClick={() => setError(null)}>Fechar</button>
        </div>
      )}
      
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
            disabled={true} // Campo único, não pode ser alterado
          />
          <p className={styles.firstCollumnTopicTitle}>Email</p>
          <input
            className={styles.firstCollumnTopicText}
            type="email"
            value={email}
            readOnly
            placeholder="Ex: example@gmail.com"
            disabled={true} // Campo único, não pode ser alterado
          />
          <p className={styles.firstCollumnTopicTitle}>Senha:</p>
          <input
            className={styles.firstCollumnTopicText}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite nova senha para alterar"
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
              <p className={styles.firstCollumnTopicTitle}>Gênero</p>
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
            disabled={loading}
          >
            {isEditing ? (loading ? "Salvando..." : "Salvar") : "Editar"}
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
                disabled={true} // Campo único, não pode ser alterado
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
          <button
            className={styles.logoutButton}
            onClick={handleLogout}
            disabled={loading}
          >
            {loading ? "Saindo..." : "Sair"}
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
