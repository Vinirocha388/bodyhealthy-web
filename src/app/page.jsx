import { FaCommentMedical } from "react-icons/fa";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Post from "@/components/posts";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <h1 className={styles.homeTitle}>Postagens</h1>
        <Post
          titulo={"Vitor Argeri"}
          descricao={"Nossa, meu treino hoje foi maravilhoso!"}
          imgLink={"https://avatars.githubusercontent.com/u/158165380?v=4"}
          imgAlt={"Imagem de perfil"}
        />
        <Post
          titulo={"Vinicius Pereira"}
          descricao={"Adorei a aula de spinning, foi incrível!"}
          imgLink={"https://avatars.githubusercontent.com/u/158165909?v=4"}
          imgAlt={"Imagem de perfil"}
        />
        <Post
          titulo={"Pablo Delgado"}
          descricao={"Hoje consegui bater meu recorde na corrida!"}
          imgLink={"https://avatars.githubusercontent.com/u/158165561?v=4"}
          imgAlt={"Imagem de perfil"}
        />
        <Post
          titulo={"Vinicius Rocha"}
          descricao={"Treino de perna concluído com sucesso, bora descansar!"}
          imgLink={"https://avatars.githubusercontent.com/u/158187426?v=4"}
          imgAlt={"Imagem de perfil"}
        />
        <Post
          titulo={"Miguel"}
          descricao={"Peguei 20kg no supino reto, graças a essa bela academia!"}
          imgLink={"https://avatars.githubusercontent.com/u/158165620?v=4"}
          imgAlt={"Imagem de perfil"}
        />
      </main>
      <div className={styles.commentButtonDiv}>
      <FaCommentMedical className={styles.commentButton} size={70} color="white" />
      </div>
      <Footer />
    </div>
  );
}
