import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Post from "@/components/posts";
import styles from "./page.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <h1 className={styles.homeTitle}>Postagens</h1>
        <Post
          titulo={"Ciclano"}
          descricao={"Nossa, meu treino hoje foi maravilhoso!"}
          imgLink={"https://static-00.iconduck.com/assets.00/profile-user-icon-1024x1024-5fg7tz2z.png"}
          imgAlt={"Imagem de perfil"}
        />
        <Post
          titulo={"Fulano"}
          descricao={"Adorei a aula de spinning, foi incrível!"}
          imgLink={"https://static-00.iconduck.com/assets.00/profile-user-icon-1024x1024-5fg7tz2z.png"}
          imgAlt={"Imagem de perfil"}
        />
        <Post
          titulo={"Beltrano"}
          descricao={"Hoje consegui bater meu recorde na corrida!"}
          imgLink={"https://static-00.iconduck.com/assets.00/profile-user-icon-1024x1024-5fg7tz2z.png"}
          imgAlt={"Imagem de perfil"}
        />
        <Post
          titulo={"Sicrano"}
          descricao={"Treino de perna concluído com sucesso, bora descansar!"}
          imgLink={"https://static-00.iconduck.com/assets.00/profile-user-icon-1024x1024-5fg7tz2z.png"}
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
        <img className={styles.commentButton} src="https://png.pngtree.com/png-clipart/20240210/original/pngtree-flat-style-comment-icon-for-y-on-a-photo-png-image_14281543.png" alt="Botão para Comentar" />
      </div>
      <Footer />
    </div>
  );
}
