import styles from "./header.module.css";
import Link from "next/link";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <a className={styles.home} href={"/"}> <h1 className={styles.logoText}>Body & Health</h1></a>
            </div>
            <nav className={styles.mainNav}>
                <ul>
                    <li><a href={"/"} className={styles.navLink}>Início</a></li>
                    <li><a href={"/servicos"} className={styles.navLink}>Serviços</a></li>
                    <li><a href={"/dicas"} className={styles.navLink}>Dicas</a></li>
                    <li><a href={"/treinos"} className={styles.navLink}>Treinos</a></li>
                    <li><a href={"/login"} className={styles.navLink}>Login</a></li>
                    <li><a href={"/contato"} className={styles.navLink}>Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;