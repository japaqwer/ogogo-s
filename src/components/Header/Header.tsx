import React, { FC } from "react";
import Image from "next/image";
import styles from "./Header.module.scss";

const Header: FC = () => {
  //   interface InputSearchProps {
  //   onChange: (value: string) => void;
  //   placeholder?: string;
  //   value?: string;
  // }

  // function Header({ onChange, placeholder, value }: InputSearchProps) {
  //   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     onChange(event.target.value);
  //   };

  return (
    <header className={styles.header}>
      <div className={styles.df}>
        <div className={styles.one}>
          <div className={styles.left}>
            <ul>
              <a href="#">Оплата</a>
              <a href="#">Доставка</a>
              <a href="#">Контакты</a>
              <a href="#">Отзывы</a>
            </ul>
          </div>
        </div>
        <div className={styles.two}>
          <img src="/images/logo.svg" alt="" />
          <input
            type="text"
            // placeholder={placeholder}
            // value={value}
            // onChange={handleInputChange}
          />
          <button>
            <a href="/Authentication/Login">войти</a>
          </button>
        </div>
        <div className={styles.three}>
          <ul>
            <div className={styles.three}>
              <img src="/images/discount-shape.svg" alt="" />
              <a href="#">
                <li>Акция!</li>
              </a>
            </div>
            <a href="#" className={styles.three}>
              <img src="/images/Group 790.svg" alt="" />
              <li>Новинки</li>
            </a>
            <a href="#" className={styles.three}>
              <img src="/images/Vector.svg" alt="" />
              <li>Ноутбуки</li>
            </a>
            <a href="#" className={styles.three}>
              <img src="/images/monitor.svg" alt="" />
              <li>Мониторы</li>
            </a>
            <a href="#" className={styles.three}>
              <img src="/images/mouse.svg" alt="" />
              <li>Аксесcуары</li>
            </a>
            <a href="#" className={styles.three}>
              <img src="/images/lamp.svg" alt="" />
              <li>Интерьер</li>
            </a>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
