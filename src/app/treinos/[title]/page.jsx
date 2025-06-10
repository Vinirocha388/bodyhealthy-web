"use client";
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './treinoDetails.module.css';

export default function TreinoDetails() {
    const params = useParams();
    const title = params.title; // Captura o title da URL

    const [exercises, setExercises] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchExercises = async () => {
            if (!title) return;

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

                // Decodificar o title da URL
                const decodedTitle = decodeURIComponent(title);

                console.log("Buscando exercícios para:", decodedTitle);
                console.log("URL:", `${apiUrl}/exercise/${userName}/${decodedTitle}`);

                // Fazer requisição com Bearer token
                const response = await axios.get(`${apiUrl}/exercise/${userName}/${decodedTitle}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                console.log("Exercícios recebidos:", response.data);
                setExercises(response.data);
                setError(null);
            } catch (err) {
                console.error("Erro ao buscar exercícios:", err);

                if (err.response) {
                    if (err.response.status === 401) {
                        setError("Sessão expirada. Por favor, faça login novamente.");
                    } else if (err.response.status === 404) {
                        setError("Treino não encontrado.");
                    } else if (err.response.status === 500) {
                        setError("Erro no servidor. Entre em contato com o suporte técnico.");
                    } else {
                        setError(`Erro ${err.response.status}: ${err.response.data.message || 'Erro desconhecido'}`);
                    }
                } else {
                    setError("Não foi possível conectar ao servidor. Verifique sua conexão.");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchExercises();
    }, [title]);

    if (loading) {
        return (
            <div className={styles.treinos}>
                <Header />
                <div className={styles.loading}>Carregando exercícios...</div>
                <Footer />
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.treinos}>
                <Header />
                <div className={styles.errorContainer}>
                    <div className={styles.error}>{error}</div>
                    <button
                        className={styles.retryButton}
                        onClick={() => window.location.reload()}
                    >
                        Tentar novamente
                    </button>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className={styles.treinos}>
            <Header />
            <div className={styles.imagemTreinos}>
                <h1 className={styles.treinosTitle}>{decodeURIComponent(title)}</h1>
            </div>
            <main>
                <div className={styles.container}>
                    <h2 className={styles.containerH2}>Exercícios</h2>

                    {exercises.length === 0 ? (
                        <div className={styles.empty}>Nenhum exercício encontrado para este treino.</div>
                    ) : (
                        <div className={styles.exercisesContainer}>
                            {exercises.map((exercise, index) => (
                                <div key={exercise.id || index} className={styles.workoutContainer}>
                                    {/* Seção de imagem */}
                                    <div className={styles.workoutImageContainer}>
                                        {exercise.imageExercise ? (
                                            <img
                                                src={exercise.imageExercise}
                                                alt={`Exercício: ${exercise.title}`}
                                                className={styles.workoutImage}
                                            />
                                        ) : (
                                            <div className={styles.workoutImage}>
                                                <p className={styles.workout}>Imagem não disponível</p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Seção de informações */}
                                    <div className={styles.workoutInfoContainer}>
                                        <h2 className={styles.workoutTitle}>{exercise.title}</h2>
                                        <p className={styles.workout}>
                                            <span className={styles.topic}>Grupo Muscular:</span> {exercise.muscleGroup}
                                        </p>
                                        <p className={styles.workoutRepetitionsNumber}>
                                            <span className={styles.topic}>Séries:</span> {exercise.series}
                                        </p>
                                        <p className={styles.workoutRepetitionsNumber}>
                                            <span className={styles.topic}>Repetições:</span> {exercise.repetitions}
                                        </p>
                                    </div>

                                    {/* Seção de texto/descrição */}
                                    <div className={styles.workoutTextContainer}>
                                        <div className={styles.workoutTextContent}>
                                            <h3 className={styles.workout}>Descrição</h3>
                                            <p className={styles.workoutText}>
                                                {exercise.description || "Nenhuma descrição disponível para este exercício."}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}