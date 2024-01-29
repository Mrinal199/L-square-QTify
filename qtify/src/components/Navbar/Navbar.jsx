import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";

function Navbar() {
    return (
    <nav className={styles.navbar}>
        <a href="/">
            <Logo/>
        </a>
        <Search placeholder={ "Search a album of your choice" } />
    </nav>
    )
}

export default Navbar;