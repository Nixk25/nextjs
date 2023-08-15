"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { Squash as Hamburger } from "hamburger-react";

const Navbar = () => {
  const pathname = usePathname();
  const session = useSession();
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.links}>
          <div className={styles.linksLeft}>
            <div className={styles.logo}>
              <Link href="/">BlogHub</Link>
            </div>
          </div>
          <div className={styles.linksRight}>
            <DarkModeToggle />
            <div className={styles.invisible}>
              <Link className={`${pathname === "/" ? "active" : ""}`} href="/">
                Home
              </Link>
              <Link
                className={`${pathname === "/about" ? "active" : ""}`}
                href="/about"
              >
                About
              </Link>
              <Link
                className={`${pathname === "/blog" ? "active" : ""}`}
                href="/blog"
              >
                Blog
              </Link>
              <Link
                className={`${pathname === "/contact" ? "active" : ""}`}
                href="/contact"
              >
                Contact
              </Link>
              <Link
                className={`${pathname === "/dashboard" ? "active" : ""}`}
                href="/dashboard"
              >
                Dashboard
              </Link>
            </div>

            <div className={styles.logoutBtnContainer}>
              {session.status === "authenticated" && (
                <button className={styles.logoutBtn} onClick={signOut}>
                  Logout
                </button>
              )}
            </div>

            <div className={styles.hamburger}>
              <Hamburger
                size={20}
                rounded
                color="#00b2fe"
                toggle={() => {
                  setNavOpen(true);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {navOpen ? (
        <div className={styles.menu}>
          <div
            className={styles.closeMenu}
            onClick={() => {
              setNavOpen(false);
            }}
          >
            X
          </div>
          <div className={styles.menuLinks}>
            <Link className={`${pathname === "/" ? "active" : ""}`} href="/">
              Home
            </Link>
            <Link
              className={`${pathname === "/about" ? "active" : ""}`}
              href="/about"
            >
              About
            </Link>
            <Link
              className={`${pathname === "/blog" ? "active" : ""}`}
              href="/blog"
            >
              Blog
            </Link>
            <Link
              className={`${pathname === "/contact" ? "active" : ""}`}
              href="/contact"
            >
              Contact
            </Link>
            <Link
              className={`${pathname === "/dashboard" ? "active" : ""}`}
              href="/dashboard"
            >
              Dashboard
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
