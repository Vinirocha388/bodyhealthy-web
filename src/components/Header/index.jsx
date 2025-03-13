import styles from "./header.module.css";
import Link from "next/link";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link className={styles.home} href={"/"}> <h1 className={styles.logoText}>Body & Health</h1></Link>
            </div>
            <nav className={styles.mainNav}>
                <ul>
                    <li><a href="#" className={styles.navLink}>Início</a></li>
                    <li><a href="#" className={styles.navLink}>Serviços</a></li>
                    <li><a href="#" className={styles.navLink}>Dicas</a></li>
                    <li><a href="#" className={styles.navLink}>Treinos</a></li>
                    <li><a href="#" className={styles.navLink}>Login</a></li>
                    <li><a href="#" className={styles.navLink}>Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;