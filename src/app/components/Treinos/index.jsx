"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./treinos.module.css";

const Treinos = () => {
    const [trainings, setTrainings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [debugInfo, setDebugInfo] = useState(null);

    useEffect(() => {
        const fetchTrainings = async () => {
            // Obter o userName e token do localStorage
            const userStr = typeof window !== 'undefined' ? localStorage.getItem("user") : null;
            const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;
            const user = userStr ? JSON.parse(userStr) : null;
            const userName = user?.userName;
            
            // Debug info
            setDebugInfo({
                userName,
                tokenExists: !!token,
                tokenLength: token?.length
            });
            
            if (!userName || !token) {
                setError("Usuário não autenticado. Faça login novamente.");
                setLoading(false);
                return;
            }
            
            try {
                setLoading(true);
                const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
                
                // Log da URL para debug
                console.log("Tentando acessar URL:", `${apiUrl}/training/${userName}`);
                
                // Verificar se o token está formatado corretamente
                console.log("Token formatado:", `Bearer ${token}`);
                
                // Incluir o token de autenticação no cabeçalho
                const res = await axios.get(`${apiUrl}/training/${userName}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                
                console.log("Dados recebidos:", res.data);
                setTrainings(res.data);
                setError(null);
            } catch (err) {
                console.error("Erro ao buscar treinos:", err);
                
                if (err.response) {
                    console.error("Resposta de erro:", err.response.data);
                    
                    // Mensagens específicas por código de erro
                    if (err.response.status === 401) {
                        setError("Sessão expirada. Por favor, faça login novamente.");
                    } else if (err.response.status === 500) {
                        setError("Erro no servidor. Entre em contato com o suporte técnico.");
                    } else {
                        setError(`Erro ${err.response.status}: ${err.response.data.message || 'Erro desconhecido'}`);
                    }
                } else {
                    setError("Não foi possível conectar ao servidor. Verifique sua conexão.");
                }
                
                setTrainings([]);
            } finally {
                setLoading(false);
            }
        };
        
        fetchTrainings();
    }, []);


    if (loading) {
        return <div className={styles.loading}>Carregando treinos...</div>;
    }

    if (error) {
        return (
            <div className={styles.errorContainer}>
                <div className={styles.error}>{error}</div>
                <button 
                    className={styles.retryButton}
                    onClick={() => window.location.reload()}
                >
                    Tentar novamente
                </button>
            </div>
        );
    }

    if (!trainings.length) {
        return <div className={styles.empty}>Nenhum treino encontrado.</div>;
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.mainTitle}>Seus Treinos</h1>
            <div className={styles.treinosGrid}>
                {trainings.map((treino) => (
                    <div key={treino.id} className={styles.treinos}>
                        <div className={styles.treinosContent}>
                            <h2 className={styles.title}>{treino.title}</h2>
                            <p className={styles.objective}>
                                <strong>Descrição:</strong> {treino.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Treinos;