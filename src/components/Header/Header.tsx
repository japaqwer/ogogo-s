import React, { FC } from "react";
import Image from "next/image";
import styles from "./Header.module.scss";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.one}>
        <div className={styles.left}>
          <ul>
            <li>O нас</li>
            <li>Гарантия</li>
            <li>Оплата</li>
            <li>Контакты</li>
            <li>Доставка</li>
            <li>Отзывы</li>
          </ul>
        </div>
        <div className={styles.right}>
          <img src="/images/facebook.svg" alt="" />
          <img src="/images/telegram.svg" alt="" />
          <img src="/images/instagram.svg" alt="" />
          <img src="/images/whatsapp.svg" alt="" />
        </div>
      </div>
      <div className={styles.two}>
        <img src="/images/ogogoshop-1.svg" alt="" />
        <input type="text" />
        <button>войти</button>
      </div>
      <div className={styles.three}>
        <ul>
          <div className={styles.three}>
            <img src="/images/discount-shape.svg" alt="" />
            <li>Акция!</li>
          </div>
          <div className={styles.three}>
            <img src="/images/Group 790.svg" alt="" />
            <li>Новинки</li>
          </div>
          <div className={styles.three}>
            <img src="/images/Vector.svg" alt="" />
            <li>Ноутбуки</li>
          </div>
          <div className={styles.three}>
            <img src="/images/mouse.svg" alt="" />
            <li>Аксесcуары</li>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Header;
