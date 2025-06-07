import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./servicos.module.css";
import GymSection from "../components/gymSection";

export default function servicos() {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <GymSection
          title="Academia"
          imageSrc="https://www.fiberoficial.com.br/cdn/shop/articles/academia_musculacao.jpg?v=1687444110&width=2048"
          imageAlt="Academia"
          description={
            <>
              <strong>Musculação</strong>: Espaço equipado com aparelhos de última
              geração, para trabalhar todas as partes do corpo e alcançar um
              treinamento completo de força e resistência. Acompanhamento técnico
              para garantir a execução correta e segura dos exercícios.
            </>
          }
        />
        <div className={styles.line}></div>
        <GymSection
          title="Natação"
          imageSrc="https://www.4fit.com.br/wp-content/uploads/2021/06/4fit-postblog-esportecompleto_blog.jpg"
          imageAlt="Natação"
          description={
            <>
              <strong>Aulas de Natação para Iniciantes</strong>: Para quem está
              começando, oferecemos aulas personalizadas que ensinam os fundamentos
              da natação, como a respiração, a técnica de braçadas e o
              posicionamento correto na água. Ideal para quem deseja aprender a
              nadar com segurança e confiança.
            </>
          }
        />
        <div className={styles.line}></div>
        <GymSection
          title="Luta"
          imageSrc="https://revistabudo.com.br/wp-content/uploads/2022/10/Robson-Conceicao-perde-para-Norte-Americano-em-luta-por-titulo-mundial-de-boxe-1.jpg"
          imageAlt="Luta"
          description={
            <>
              <strong>Boxe</strong>: Treinamento de boxe com foco no condicionamento
              físico, autodefesa e desenvolvimento de habilidades técnicas.
              <br />
              <strong>Muay Thai</strong>: Aulas de Muay Thai para quem quer aprender
              a arte marcial tailandesa e aprimorar a resistência física.
              <br />
              <strong>Jiu-Jitsu</strong>: Aulas práticas e técnicas de Jiu-Jitsu,
              tanto para autodefesa quanto para competições.
              <br />
              <strong>Karatê</strong>: Treinamento baseado em técnicas de karatê,
              com ênfase na disciplina e na autoconfiança.
            </>
          }
        />
      </main>
      <Footer />
    </div>
  );
}
