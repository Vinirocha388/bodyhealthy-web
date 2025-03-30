import styles from "./page.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        
        <div className={styles.welcome}>
          <p className={styles.welcomeTitle}>
            Bem Vindo
            <br />
            <span className={styles.welcomeText}>
              Nossos sistemas oferecem treinos e dicas especializados para que
              você tenha um excelente uso e uma ótima saúde
            </span>
          </p>
          <button className={styles.button}>Fazer Login</button>
        </div>

        <div className={styles.whoWeAre}>
          <h1 className={styles.whoWeAreTitle}>Quem Somos?</h1>
          <p className={styles.whoWeAreText}>
            Na Body & Healthy, acreditamos que a saúde e o bem-estar vão além da
            estética – é sobre qualidade de vida, superação e equilíbrio. Nossa
            academia foi criada para oferecer um ambiente acolhedor e motivador,
            onde pessoas de todas as idades e níveis de condicionamento físico
            possam alcançar seus objetivos com suporte profissional e
            infraestrutura de ponta. <br /> <br />
            <u>
              Venha fazer parte da Body & Healthy e descubra o prazer de cuidar
              do seu corpo e mente!
            </u>
          </p>
        </div>

        <div className={styles.posts}>
          <h1>Post da comunidade</h1>
          <div className={styles.posts1}>
          <FaUserCircle className={styles.userIcon} size={40} />
          <h2 className={styles.postTitle}>Ciclano</h2>
          <p className={styles.postDesc}>"Quem mais ama essa sensação pós-treino? É viciante! "</p>
          </div>

          <div className={styles.posts1}>
          <FaUserCircle className={styles.userIcon} size={40} />
          <h2 className={styles.postTitle}>Ciclano</h2>
          <p className={styles.postDesc}>"Quem mais ama essa sensação pós-treino? É viciante! "</p>
          </div>
          <Link href={"/postagens"}><button className={styles.postButton}>Ir para Fórum</button></Link>
        </div>

        <div className={styles.ourServices}>
          <h1 className={styles.ourServicesTitle}>Nossos Serviços</h1>
          <div className={styles.ourServicesContainer}>
            <h2 className={styles.exerciseTitle}>Musculação</h2>
            <p className={styles.exerciseText}>
              Treinos personalizados com equipamentos modernos e acompanhamento
              profissional para ganho de força, definição e resistência.
            </p>
          </div>
          <div className={styles.ourServicesContainer}>
            <h2 className={styles.exerciseTitle}>Natação</h2>
            <p className={styles.exerciseText}>
              Treinos de baixo impacto na piscina, perfeitos para
              condicionamento físico e fortalecimento sem sobrecarregar as
              articulações.
            </p>
          </div>
          <button className={styles.button}>Veja Mais</button>
        </div>

        <div className={styles.frequentlyQuestions}>
          <h1 className={styles.frequentlyQuestionsTitle}>Perguntas Frequentes</h1>
          <div className={styles.frequentlyQuestionsContainer}>
            <p className={styles.frequentlyQuestionsText}>
              Qual o horário de funcionamento?
            </p>
          </div>
          <div className={styles.frequentlyQuestionsContainer}>
            <p className={styles.frequentlyQuestionsText}>
              Quais formas de pagamento são aceitas?
            </p>
          </div>
          <div className={styles.frequentlyQuestionsContainer}>
            <p className={styles.frequentlyQuestionsText}>
              Consigo fazer uma aula experimental?
            </p>
          </div>
        </div>

        <div className={styles.knowMore}>
          <p className={styles.knowMoreText}>
            Conheça nosso app e leve a Body & Healthy com você onde for! 💪
          </p>
          <button className={styles.button}>Baixar Aqui!</button>
        </div>
      </main>

      <Footer />
    </div>
  );
}