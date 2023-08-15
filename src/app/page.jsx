import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.svg";
import Button from "./components/button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.texts}>
        <h1 className={styles.headline}>Best place for your Blogs</h1>
        <p className={styles.desc}>
          Unleashing the power of your blog ideas has never been more effortless
          than a squirrel finding its hidden stash of acorns!{" "}
        </p>
        <Button url="/dashboard/login" title="Login and write" />
      </div>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src={Hero}
          alt="hero image for website bloghub"
        />
      </div>
    </div>
  );
}
