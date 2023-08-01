import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import ContactImg from "public/contact.svg";
import Button from "../components/button/Button";

export const metadata = {
  title: "BlogHub-Contact",
  description: "Contact on bloghub support ",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headline}>
        <h1>Lets get in Touch</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              src={ContactImg}
              alt="contact image for contact page for website bloghub"
            />
          </div>
        </div>
        <div className={styles.right}>
          <form className={styles.form} action="">
            <input
              placeholder="Your Name"
              type="name"
              className={styles.input}
            />
            <input
              placeholder="Your Email"
              type="email"
              className={styles.input}
            />
            <textarea
              placeholder="Write message"
              className={styles.textarea}
              cols="30"
              rows="10"
            ></textarea>
            <Button url="#" title="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
