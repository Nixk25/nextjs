import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  } else {
    return res.json();
  }
}

export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.textTop}>
          <div className={styles.headline}>
            <h1>{data.title}</h1>
          </div>
          <div className={styles.desc}>{data.desc}</div>
          <div className={styles.avatar}>
            <div className={styles.avatarName}>{data.username}</div>
            <div className={styles.avatarImg}>
              <Image src={data.image} width={40} height={40} />
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src={data.image} width={400} height={200} />
        </div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.bottomText}>{data.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
