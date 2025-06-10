"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./treinos.module.css";
import { useRouter } from "next/navigation";

const Treinos = () => {
    const [trainings, setTrainings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchTrainings = async () => {
            // Obter o userName e token do localStorage
            const userStr = typeof window !== 'undefined' ? localStorage.getItem("user") : null;
            const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;
            const user = userStr ? JSON.parse(userStr) : null;
            const userName = user?.userName;

            if (!userName || !token) {
                setError("Usuário não autenticado. Faça login novamente.");
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

                // Incluir o token de autenticação no cabeçalho
                const res = await axios.get(`${apiUrl}/training/${userName}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                setTrainings(res.data);
                setError(null);
            } catch (err) {
                console.error("Erro ao buscar treinos:", err);

                if (err.response) {
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

    const handleTreinoClick = (treino) => {
        const userStr = localStorage.getItem("user");
        const token = localStorage.getItem("token");
        const user = userStr ? JSON.parse(userStr) : null;
        const userName = user?.userName;

        if (!userName || !token) {
            setError("Usuário não autenticado. Faça login novamente.");
            return;
        }

        // Navegar para a página dinâmica do Next.js
        // Encode o title para lidar com caracteres especiais
        const encodedTitle = encodeURIComponent(treino.title);
        router.push(`/treinos/${encodedTitle}`);
    };

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
                    <div
                        key={treino.id}
                        className={styles.treinos}
                        onClick={() => handleTreinoClick(treino)}
                        style={{ cursor: 'pointer' }}
                    >
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