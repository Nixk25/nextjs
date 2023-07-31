import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.container}>
      {data.map((item) => (
        <Link href={item._id} key={item._id}>
          <div className={styles.blogPost}>
            <div className={styles.imgContainer}>
              <Image
                className={styles.img}
                src={item.image}
                width={400}
                height={200}
              />
            </div>
            <div className={styles.content}>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.desc}>{item.desc}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
