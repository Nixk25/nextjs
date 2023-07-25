import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.copyrightText}>
        <p>©2023 BlogHub. All rights reserved.</p>
      </div>
      <div className={styles.socialMedia}>
        <Link href="#">
          <Image
            className={styles.social}
            src="/1.png"
            width={20}
            height={20}
            alt="socials media of bloghub"
          />
        </Link>
        <Link href="#">
          <Image
            className={styles.social}
            src="/2.png"
            width={20}
            height={20}
            alt="socials media of bloghub"
          />
        </Link>
        <Link href="#">
          <Image
            className={styles.social}
            src="/3.png"
            width={20}
            height={20}
            alt="socials media of bloghub"
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
