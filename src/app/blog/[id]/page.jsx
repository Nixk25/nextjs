import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.textTop}>
          <div className={styles.headline}>
            <h1>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum,
              necessitatibus!
            </h1>
          </div>
          <div className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            provident quod fuga soluta exercitationem reiciendis maiores ipsum
            fugiat repellendus laboriosam!
          </div>
          <div className={styles.avatar}>
            <div className={styles.avatarName}>Nick Melda</div>
            <div className={styles.avatarImg}>
              <Image src="/testPic.webp" width={40} height={40} />
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/testPic.webp" width={400} height={200} />
        </div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.bottomText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolore
          mollitia in voluptatum minima quaerat quis officia quas, id quasi
          voluptatibus. Explicabo tempora facilis dolore sequi iste atque
          deleniti quasi enim in neque. Enim optio explicabo facere? Tempore
          veritatis ex cumque. Dignissimos quidem error deleniti explicabo
          dolores odit. Dolores labore aspernatur laborum hic magni suscipit,
          eaque minus quidem quisquam ea unde repellat iure ratione! Sed dolores
          unde officiis distinctio? Aspernatur numquam magnam similique
          dignissimos. Voluptates, vel. Delectus harum totam, inventore
          necessitatibus qui a dolor non! Mollitia, veniam esse earum, molestias
          quis dolorem soluta nulla velit adipisci vitae tempora neque ipsum.
          Earum inventore, ab aliquam ut ducimus dolorem cumque tenetur
          reprehenderit provident animi sint architecto ullam, possimus aliquid
          tempora, ad magnam veniam alias harum libero repellendus atque
          laudantium! Suscipit commodi nemo odit consequatur reprehenderit quas
          aliquam possimus debitis laudantium itaque, earum unde quis amet
          maiores sint ullam dolor libero voluptas officiis deleniti corrupti!
          Doloremque odio consequatur odit similique maiores delectus iste
          eligendi velit illum earum quibusdam atque mollitia nisi eos,
          repudiandae quis ab provident? Perspiciatis quam velit eaque id
          corporis ad, provident molestias! Atque quisquam, ullam placeat
          numquam provident quod, eveniet, ducimus nemo corporis qui obcaecati
          consectetur. Modi, est. Rerum amet nobis voluptas voluptatum,
          praesentium inventore corrupti saepe omnis officiis placeat itaque ad
          distinctio ipsam ab ullam voluptates! Nam nulla officia, nihil saepe
          nobis porro rem repellat impedit reprehenderit sequi, adipisci
          doloremque id alias nesciunt et illum fuga iure explicabo ipsam.
          Dolorem id deleniti deserunt sint asperiores perferendis animi dicta
          nobis explicabo temporibus? Tempora repellendus distinctio vero
          perspiciatis doloribus, quisquam velit! Blanditiis id quidem eaque
          nisi ad earum repellat ea corrupti natus, alias cumque assumenda
          ratione officia dolor dolore iure suscipit animi similique eveniet
          illum perferendis ipsum impedit qui optio? Quibusdam dolore deserunt,
          magnam laudantium totam saepe perferendis voluptate? Quos, adipisci!
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
