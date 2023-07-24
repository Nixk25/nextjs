import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <div className={styles.linksLeft}>
          <Link className={styles.logo} href="/">
            BlogHub
          </Link>
        </div>
        <div className={styles.linksRight}>
          <Link className={styles.link} href="/">
            Home
          </Link>
          <Link className={styles.link} href="/about">
            About
          </Link>
          <Link className={styles.link} href="/portfolio">
            Portfolio
          </Link>
          <Link className={styles.link} href="/blog">
            Blog
          </Link>
          <Link className={styles.link} href="/contact">
            Contact
          </Link>
          <Link className={styles.link} href="/dashboard">
            Dashboard
          </Link>
          <div className={styles.logoutBtnContainer}>
            <button className={styles.logoutBtn}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
