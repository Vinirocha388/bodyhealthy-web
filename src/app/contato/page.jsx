import Footer from "../components/Footer";
import styles from "./contato.module.css";
import Header from "../components/Header";

export default function contato() {
return (
    <div className={styles.container}>
    <Header />
    <div className={styles.contatoImagem}>
        <h1 className={styles.contatoTitle}>Contato</h1>
        <div className={styles.contatoContainer}>
        <div className={styles.contatoContainerDiv}>

            <div className={styles.contatoNome}>
                <h2>Seu nome</h2>
                <input name="name" type="name" placeholder=" Nome:" className={styles.contatoNameInput} required/>
            </div>
                <div className={styles.contatoEmail}>
                <h2>Seu email</h2>
                <input name="email"type="email" placeholder=" Email:" className={styles.contatoEmailInput} required/>
            </div>
            <div className={styles.contatoMensagem}>
                <h2>Mensagem</h2>
                <textarea name="message" placeholder=" Sua mensagem aqui:"  className={styles.contatoMensagemInput} required></textarea>
            </div>

        </div>
        </div>
    </div>
    <Footer />
    </div>
);
}
