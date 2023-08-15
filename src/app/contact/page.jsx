"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import ContactImg from "public/contact.svg";
import Button from "../components/button/Button";
import { set } from "mongoose";

const Contact = () => {
  const [send, setSend] = useState(false);

  return (
    <div className={styles.container}>
      <div>
        {send ? (
          <div className={styles.invisible}>
            <h1>
              Thank you! Your Message has been sent successfully. I am working
              on it!
            </h1>
          </div>
        ) : (
          <div>
            <h1 className={styles.headline}>Lets get in Touch</h1>
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
                <form className={styles.form} onSubmit={() => setSend(true)}>
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
                  <button className={styles.btn} type="submit">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
