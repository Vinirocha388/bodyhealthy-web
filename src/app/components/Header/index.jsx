"use client";

import { useState, useEffect } from "react";
import styles from "./header.module.css";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import { useAuth } from "@/app/context/AuthContext"; // Importe o hook useAuth

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(true);
    // Use o contexto de autenticação diretamente
    const { user, isAuthenticated } = useAuth();

    useEffect(() => {
        // Verificar tema
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "light") {
            document.body.classList.add("light");
            setIsDark(false);
        } else {
            document.body.classList.remove("light");
            setIsDark(true);
        }
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleTheme = () => {
        const body = document.body;
        if (body.classList.contains("light")) {
            body.classList.remove("light");
            localStorage.setItem("theme", "dark");
            setIsDark(true);
        } else {
            body.classList.add("light");
            localStorage.setItem("theme", "light");
            setIsDark(false);
        }
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <MdOutlineMenu
                    className={styles.menuIcon}
                    size={60}
                    color="white"
                    onClick={toggleMenu}
                />
                <a className={styles.home} href={"/"}>
                    <h1 className={styles.logoText}>Body & Health</h1>
                </a>
                <FaUserCircle className={styles.userIcon} size={50} color="white" />
            </div>

            <nav className={styles.mainNav}>
                <ul>
                    <li><Link href={"/"} className={styles.navLink}>Início</Link></li>
                    <li><Link href={"/servicos"} className={styles.navLink}>Serviços</Link></li>
                    <li><Link href={"/treinos"} className={styles.navLink}>Treinos</Link></li>
                    <li>
                        {isAuthenticated && user?.userName ? (
                            <Link href={"/usuario"} className={styles.navLink}>{user.userName}</Link>
                        ) : (
                            <Link href={"/login"} className={styles.navLink}>Login</Link>
                        )}
                    </li>
                    <li><Link href={"/contato"} className={styles.navLink}>Contato</Link></li>
                    <li>
                        <button onClick={toggleTheme} className={styles.themeToggle}>
                            {isDark ? "☀️ Claro" : "🌙 Escuro"}
                        </button>
                    </li>
                </ul>
            </nav>

            {menuOpen && (
                <nav className={`${styles.dropdownMenu} ${menuOpen ? styles.open : ""}`}>
                    <ul>
                        <li><Link href={"/"} className={styles.navLink}>Início</Link></li>
                        <li><Link href={"/servicos"} className={styles.navLink}>Serviços</Link></li>
                        <li><Link href={"/treinos"} className={styles.navLink}>Treinos</Link></li>
                        <li>
                            {isAuthenticated && user?.userName ? (
                                <Link href={"/usuario"} className={styles.navLink}>{user.userName}</Link>
                            ) : (
                                <Link href={"/login"} className={styles.navLink}>Login</Link>
                            )}
                        </li>
                        <li><Link href={"/contato"} className={styles.navLink}>Contato</Link></li>
                        <li>
                            <button onClick={toggleTheme} className={styles.themeToggle}>
                                {isDark ? "☀️ Claro" : "🌙 Escuro"}
                            </button>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;