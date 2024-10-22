import React from "react";
import styles from "./styles.module.scss";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <h2>Francisco Sabino</h2>
        <div className={styles.card__header__company}>
          <p>NTI Gymnasiet Södertörn</p>
          <p>Frontend developer</p>
        </div>
      </div>
      <hr />
      <div className={styles.card__body}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptate, quas, quos
          quod, doloremque quidem quae voluptas exercitationem dolorem nemo.
        </p>
        <img
          src="https://res.cloudinary.com/frank2021/image/upload/v1708267815/portfolio/uo2erokjtazdn4lou5py.jpg"
          alt="profile"
        />
      </div>
    </div>
  );
};

export default Card;
