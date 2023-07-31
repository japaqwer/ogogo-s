import React, { FC, useState } from "react";
import Image from "next/image";
import styles from "./Header.module.scss";
import axios from "axios";

const Header: FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Функция для выполнения выхода пользователя
  const handleLogout = () => {
    // Логика для выполнения выхода пользователя
    // Например, очистка токена аутентификации, удаление сессии и т.д.

    // Очистка токена аутентификации
    localStorage.removeItem("token"); // Предполагается, что токен хранится в localStorage

    // Удаление сессии на сервере (пример)
    axios
      .post("/api/logout")
      .then(() => {
        setIsLoggedIn(false); // Обновление статуса аутентификации
      })
      .catch((error) => {
        console.log("Ошибка при выполнении выхода:", error);
      });
  };

  return (
    <header className={styles.header}>
      <div className={styles.df}>
        <div className={styles.one}>
          <div className={styles.left}>
            <ul>
              <a href="#">Оплата</a>
              <a href="/Routes/DeliverPage">Доставка</a>
              <a href="#">Контакты</a>
              <a href="#">Отзывы</a>
            </ul>
          </div>
        </div>
        <div className={styles.two}>
          <a href="http://localhost:3000/">
            <img src="/images/logo.svg" alt="" />
          </a>
          <input type="text" />
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
            <a href="/Routes/ProductPage" className={styles.three}>
              <img src="/images/Vector.svg" alt="" />
              <li>Ноутбуки</li>
            </a>
            <a href="/Routes/ProductPage" className={styles.three}>
              <img src="/images/monitor.svg" alt="" />
              <li>Мониторы</li>
            </a>
            <a href="/Routes/ProductPage" className={styles.three}>
              <img src="/images/mouse.svg" alt="" />
              <li>Аксесcуары</li>
            </a>
            <a href="/Routes/ProductPage" className={styles.three}>
              <img src="/images/lamp.svg" alt="" />
              <li>Интерьер</li>
            </a>
          </ul>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.prof}>
          {isLoggedIn ? (
            <button>
              <a href="/Routes/ProfilePage">профиль</a>
            </button>
          ) : (
            <button>
              <a href="/Authentication/Login">войти</a>
            </button>
          )}
        </div>
        <div className={styles.prof}>
          <button >
            <a href="/Routes/BasketPage">корзинка</a>
          </button>
        </div>
        <div className={styles.prof}>
          <button >
            <a href="/Routes/BasketPage">корзинка</a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
