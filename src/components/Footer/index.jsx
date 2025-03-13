import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <h1 className={styles.footerLogo}>Body & Health</h1>
            <div className={styles.footerContent}>
                <div className={styles.footerCollumns}>
                    <div className={styles.CollumnOne}>
                        <p className={styles.footerLinks}>Início</p>
                        <p className={styles.footerLinks}>Serviços</p>
                        <p className={styles.footerLinks}>Dicas</p>
                    </div>
                    <div className={styles.CollumnTwo}>
                        <p className={styles.footerLinks}>Treinos</p>
                        <p className={styles.footerLinks}>Login</p>
                        <p className={styles.footerLinks}>Contato</p>
                    </div>
                </div>
                <div className={styles.footerSocialMedia}>
                    {/* Instagram */}
                    <img className={styles.logoIcon} src="" alt="" />
                    {/* Facebook */}
                    <img className={styles.logoIcon} src="" alt="" />
                    {/* Whatsapp */}
                    <img className={styles.logoIcon} src="" alt="" />
                </div>
            </div>
            <p className={styles.footerCopyright}>© 2025 Body & Health. Todos os direitos reservados.</p>
        </footer>
    );
};

export default Footer;