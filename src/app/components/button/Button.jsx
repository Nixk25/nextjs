import React from "react";
import Link from "next/link";
import styles from "./button.module.css";

const Button = ({ url, title }) => {
  return (
    <Link className={styles.link} href={url}>
      <button className={styles.button}>{title}</button>
    </Link>
  );
};

export default Button;
