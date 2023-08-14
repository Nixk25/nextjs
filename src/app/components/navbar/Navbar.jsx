"use client";

import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const session = useSession();
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <div className={styles.linksLeft}>
          <div className={styles.logo}>
            <Link href="/">BlogHub</Link>
          </div>
        </div>
        <div className={styles.linksRight}>
          <DarkModeToggle />
          <Link className={styles.link} href="/">
            Home
          </Link>
          <Link className={styles.link} href="/about">
            About
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
            {session.status === "authenticated" && (
              <button className={styles.logoutBtn} onClick={signOut}>
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
