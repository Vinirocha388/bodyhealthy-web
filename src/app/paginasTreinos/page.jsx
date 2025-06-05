"use client";

import styles from "./paginasTreinos.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Titulo from "../components/Titulo";
import CardExercicios from "../components/CardExercicios";
import Exercicios from "../components/Exercicios";

export default function PaginasTreinos() {
  return ( 
    <div className={styles.container}>
      <Header />
      <main>  
        <Titulo title="Hipertrofia" />
        <CardExercicios
          explication="O treino de peito e tríceps é uma combinação eficaz para desenvolver a força e a massa muscular no peitoral e na parte posterior do braço.
        Segue abaixo uma breve explicação de cada músculo:"
          muscleGroup="Peito"
          muscleGroupExplanation="É um grupo muscular amplo que contribui para a forma física e a força geral."
          muscleGroupExplanation2="É responsável pela extensão do cotovelo, importante para diversas atividades."
          muscleGroup2="Tríceps"
          titleWorkout="Exercícios de Peito:"
        >
          <Exercicios
            image="https://treinomestre.com.br/wp-content/uploads/2017/08/supino-fechado-cp.jpg"
            topic="Nome:"
            title="Supino Reto"
            workout="Volume de Treinos:"
            series="Séries e Repetições"
            number="4x10"
            text="É um dos exercícios mais importantes para quem busca fortalecer e aumentar a massa muscular na região do peito. "
            
          />
          <Exercicios
            image="https://grandeatleta.com.br/blog/wp-content/uploads/2022/07/supino-inclinado-com-halteres-.jpg"
            topic="Nome:"
            title="Supino Inclinado"
            workout="Volume de Treinos:"
            series="Séries e Repetições:"
            text="É um exercício que ativa, principalmente, os músculos do peitoral, mas também envolve os tríceps e deltoides."
            
          />
        </CardExercicios>


      </main>
      <Footer />
    </div>
  );
}
