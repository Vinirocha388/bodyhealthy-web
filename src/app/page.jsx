import styles from "./page.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FrequentlyContainer from "./components/frequentlyContainer";
import ServiceCard from "./components/serviceCard";
import Button from "./components/Button";
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
          <Link href="/login">
            <Button buttonText="Fazer Login" />
          </Link>

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

        <div className={styles.ourServices}>
          <h1 className={styles.ourServicesTitle}>Nossos Serviços</h1>
          <ServiceCard
            title="Musculação"
            text="Treinos personalizados com equipamentos modernos e acompanhamento profissional para ganho de força, definição e resistência."
          />
          <ServiceCard
            title="Natação"
            text="Treinos de baixo impacto na piscina, perfeitos para condicionamento físico e fortalecimento sem sobrecarregar as articulações."
          />
          <Link href="/servicos">
            <Button buttonText="Veja Mais" />
          </Link>
        </div>

        <div className={styles.frequentlyQuestions}>
          <h1 className={styles.frequentlyQuestionsTitle}>Perguntas Frequentes</h1>
          <FrequentlyContainer
            question="Qual o horário de funcionamento?"
            answer="Nosso horário de funcionamento é de segunda a sexta, das 6h às 22h, e aos sábados, das 8h às 14h."
          />
          <FrequentlyContainer
            question="Quais formas de pagamento são aceitas?"
            answer="Aceitamos cartões de crédito, débito, PIX e pagamentos em dinheiro."
          />
          <FrequentlyContainer
            question="Consigo fazer uma aula experimental?"
            answer="Sim, oferecemos uma aula experimental gratuita para novos alunos. Entre em contato para agendar!"
          />
        </div>

        <div className={styles.knowMore}>
          <p className={styles.knowMoreText}>
            Conheça nosso app e leve a Body & Healthy com você onde for! 💪
          </p>
          <Button buttonText="Download" />
        </div>
      </main>

      <Footer />
    </div>
  );
}