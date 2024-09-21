import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, There</h1>
        <p className={styles.description}>
        I’m Samyuktha aka SAM, currently pursuing B.Tech in Information Technology. 
        My projects include full-stack development and Robotic Process Automation.
        Check out my <b><a style={{ textDecoration: 'none', color: '#ffffff' }} href="https://drive.google.com/file/d/1Tm13ilk29YsE9P8klQSDfKQf2H_Xfdj2/view?usp=sharing">resume.</a></b> 
        </p>
       
        <a href="mailto:sam6875yuk@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
