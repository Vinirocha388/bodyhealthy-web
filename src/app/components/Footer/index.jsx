import Link from 'next/link';
import styles from './footer.module.css';
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <h1 className={styles.footerLogo}>Body & Health</h1>
            <div className={styles.footerContent}>
                <div className={styles.footerCollumns}>
                    <div className={styles.footerCollumn}>
                        <Link className={styles.footerLinks} href="/">Início</Link>
                        <Link className={styles.footerLinks} href="/servicos">Serviços</Link>
                        <Link className={styles.footerLinks} href="/dicas">Dicas</Link>
                    </div>
                    <div className={styles.footerCollumn}>
                        <Link className={styles.footerLinks} href="/treinos">Treinos</Link>
                        <Link className={styles.footerLinks} href="/login">Login</Link>
                        <Link className={styles.footerLinks} href="/contato">Contato</Link>
                    </div>
                </div>
                <div className={styles.footerSocialMedia}>
                    <a className={styles.socialMedia} href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={60} color="#E4405F" />
                    </a>
                    <a className={styles.socialMedia} href="https://wa.me/seuNumero" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp size={60} color="#25D366" />
                    </a>
                    <a className={styles.socialMedia} href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={60} color="#1877F2" />
                    </a>
                </div>
            </div>
            <p className={styles.footerCopyright}>© 2025 Body & Health. Todos os direitos reservados.</p>
        </footer>
    );
};

export default Footer;