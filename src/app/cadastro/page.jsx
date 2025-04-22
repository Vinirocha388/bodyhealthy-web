import styles from "./cadastro.module.css"
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function cadastro() {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.cadastroImagem}>
                <h1 className={styles.cadastroTitle}>Cadastro</h1>
                <div className={styles.cadastroContainer}>
                    <div className={styles.cadastroContainerDiv}>
                        <div className={styles.cadastroProfileImage}>
                            <img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png" alt="Profile" className={styles.cadastroProfileImage} />
                        </div>

                    <form action="https://formsubmit.co/miguel.sarti@aluno.senai.br" method="POST"/>

                    <div className={styles.cadastroUsername}>
                        <h2>Nome de Usuário:</h2>
                        <input name="username" type="name" placeholder=" Nome de Usuário:" className={styles.cadastroUsernameInput} required/>
                    </div>

                    <div className={styles.cadastroName}>
                        <h2>Nome:</h2>
                        <input name="name" type="name" placeholder=" Nome:" className={styles.cadastroNameInput} required/>
                    </div>

                    <div className={styles.cadastroEmail}>
                        <h2>Email:</h2>
                        <input name="email" type="email" placeholder=" Email:" className={styles.cadastroEmailInput} required/>
                    </div>

                    <div className={styles.cadastroSenha}>
                        <h2>Senha:</h2>
                        <input name="senha" type="password" placeholder=" Senha:" className={styles.cadastroSenhaInput} required/>    
                    </div>

                    <div className={styles.cadastroTelefone}>
                        <h2>Telefone:</h2>
                        <input name="telefone" type="number" placeholder=" Telefone:" className={styles.cadastroTelefoneInput} required/>
                    </div>

                    <div className={styles.cadastroIdade}>
                        <h2>Idade:</h2>
                        <input name="telefone" type="number" placeholder=" Idade" className={styles.cadastroIdadeInput} required/>
                    </div>

                    <div className={styles.cadastroSexo}>
                        <h2>Sexo:</h2>
                        <select name="sexo" className={styles.cadastroSexoInput} required>
                            <option value="" disabled selected >Selecione seu sexo</option>
                            <option value="masculino">Masculino</option>
                            <option value="feminino">Feminino</option>
                            <option value="outro">Outro</option>
                        </select>
                    </div>

                    <div className={styles.cadastroAltura}>
                        <h2>Altura:</h2>
                        <input name="altura" type="number" placeholder=" Altura:" className={styles.cadastroAlturaInput} required/>
                    </div>

                    <div className={styles.cadastroPeso}>
                        <h2>Peso:</h2>
                        <input name="peso" type="number" placeholder=" Peso:" className={styles.cadastroPesoInput} required/>
                    </div>

                    <div className={styles.cadastroEnviar}>
                        <Link href={"./conclusao"}> 
                            <button type="submit" className={styles.cadastroButton}>Enviar</button>
                            <input type="hidden" name="_captcha" value="false"/>
                        </Link>
                        
                    </div>

                    </div>
                </div>
            </main>
            <Footer />
        </div>  
    )
}