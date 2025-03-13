import styles from "./header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <h1 className={styles.logoText  }>Body & Health</h1>
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