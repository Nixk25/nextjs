import React from "react";
import styles from "./page.module.css";
import Button from "../components/button/Button";

export const metadata = {
  title: "About Us in BlogHub",
  description: "About page Bloghub",
};

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.texts}>
        <div className={styles.left}>
          <h2 className={styles.headline}>Who are we?</h2>
          <p className={styles.desc}>
            We're a group of passionate individuals who believe in the power and
            potential of writing your own texts and makimg from them your own
            blogs, which you can share with the others on this platform.
          </p>
          <p className={styles.desc}>
            We believe that everyone has a unique voice and story to share with
            the world. Our platform provides the perfect space for you to
            unleash your creativity and turn your thoughts into captivating
            blogs.
          </p>
          <p className={styles.desc}>
            By joining our community, you'll have the opportunity to connect
            with other writers, receive feedback, and gain exposure for your
            work. So, whether you're an aspiring writer or a seasoned wordsmith,
            we invite you to embark on this journey of self-expression and
            discover the limitless possibilities that lie within your own words.
          </p>
        </div>
        <div className={styles.right}>
          <h2 className={styles.headline}>What we do?</h2>
          <p className={styles.desc}>
            Our mission is to provide an online space where people around the
            world come together to write their thoughts and problems in modern
            world
          </p>
          <p className={styles.desc}>
            Whether you're a seasoned wordsmith or an aspiring writer, our
            community offers a supportive environment to express yourself,
            receive feedback, and gain exposure for your work. We believe that
            everyone has a voice and a story worth sharing, and we invite you to
            join us on this journey of self-expression and limitless
            possibilities.
          </p>
          <p className={styles.desc}>
            Together, let's create a space where thoughts and problems find
            solace and understanding in the modern world. If you have some
            questions, just click on the button below.
          </p>
          <Button url="/contact" title="Contact Us" />
        </div>
      </div>
    </div>
  );
};

export default About;
