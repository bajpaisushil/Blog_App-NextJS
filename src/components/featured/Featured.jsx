import React from "react";
import "./featured.module.css";
import styles from "./featured.module.css";
import Image from 'next/image';

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Lama dev here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores!
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
            libero inventore dolorum dolore distinctio, maiores maxime nostrum
            excepturi cum eos perferendis, explicabo praesentium repellendus
            quisquam?
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
