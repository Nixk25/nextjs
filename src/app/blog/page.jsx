import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  return (
    <div className={styles.container}>
      <Link href="/blog/testID">
        <div className={styles.blogPost}>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              src="/testPic.webp"
              width={400}
              height={200}
            />
          </div>
          <div className={styles.content}>
            <div className={styles.title}>Test</div>
            <div className={styles.desc}>Desc</div>
          </div>
        </div>
      </Link>
      <Link href="/blog/testID">
        <div className={styles.blogPost}>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              src="/testPic.webp"
              width={400}
              height={200}
            />
          </div>
          <div className={styles.content}>
            <div className={styles.title}>Test</div>
            <div className={styles.desc}>Desc</div>
          </div>
        </div>
      </Link>
      <Link href="/blog/testID">
        <div className={styles.blogPost}>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              src="/testPic.webp"
              width={400}
              height={200}
            />
          </div>
          <div className={styles.content}>
            <div className={styles.title}>Test</div>
            <div className={styles.desc}>Desc</div>
          </div>
        </div>
      </Link>
      <Link href="/blog/testID">
        <div className={styles.blogPost}>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              src="/testPic.webp"
              width={400}
              height={200}
            />
          </div>
          <div className={styles.content}>
            <div className={styles.title}>Test</div>
            <div className={styles.desc}>Desc</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
