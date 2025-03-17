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
                    <li><Link href="#" className={styles.navLink}>Início</Link></li>
                    <li><Link href="#" className={styles.navLink}>Serviços</Link></li>
                    <li><Link href="#" className={styles.navLink}>Dicas</Link></li>
                    <li><Link href="#" className={styles.navLink}>Treinos</Link></li>
                    <li><Link href="#" className={styles.navLink}>Login</Link></li>
                    <li><Link href="#" className={styles.navLink}>Contato</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;