"use client";

import { useState } from "react";
import styles from "./header.module.css";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
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
                    <li><Link href={"/dicas"} className={styles.navLink}>Dicas</Link></li>
                    <li><Link href={"/treinos"} className={styles.navLink}>Treinos</Link></li>
                    <li><Link href={"/login"} className={styles.navLink}>Login</Link></li>
                    <li><Link href={"/contato"} className={styles.navLink}>Contato</Link></li>
                </ul>
            </nav>
            {menuOpen && (
    <nav className={`${styles.dropdownMenu} ${menuOpen ? styles.open : ""}`}>
        <ul>
            <li><Link href={"/"} className={styles.navLink}>Início</Link></li>
            <li><Link href={"/servicos"} className={styles.navLink}>Serviços</Link></li>
            <li><Link href={"/dicas"} className={styles.navLink}>Dicas</Link></li>
            <li><Link href={"/treinos"} className={styles.navLink}>Treinos</Link></li>
            <li><Link href={"/login"} className={styles.navLink}>Login</Link></li>
            <li><Link href={"/contato"} className={styles.navLink}>Contato</Link></li>
        </ul>
    </nav>
)}

        </header>
    );
};

export default Header;