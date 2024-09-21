import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:sam6875yuk@gmail.com">Ready to Collaborate and Innovate?</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/samyuktha23/">Let’s Connect and Grow!</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/Irate-sam">Code on</a>
        </li>
        <li> <center><p>&copy; {currentYear} SAMYUKTHA. Crafted by yours truly</p></center></li>
        
      </ul>
     
    </footer>
  );
};
