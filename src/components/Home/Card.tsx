import React from "react";
import styles from "./Card.module.scss";

const Card = () => {
  return (
    <main className={styles.main}>
      <div className={styles.one}>
        <span>Популярные товары</span>

        <div className={styles.card}>
          <div className={styles.card_one}>
            {/* <div className={styles.card_img}> */}
            <img src="/images/qwertyuiop.png" alt="" />
            {/* </div> */}
            <div className={styles.card_text}>
              <h3>
                Slim W1 Wired <br /> backlit keyboard
              </h3>
              <h4>
                Легко очищается <br /> То что тебе нужно
              </h4>
              <a href="#">Подробнее</a>
            </div>
          </div>

          <div className={styles.card_one}>
            {/* <div className={styles.card_img}> */}
            <img src="/images/qwertyuiop.png" alt="" />
            {/* </div> */}
            <div className={styles.card_text}>
              <h3>
                Slim W1 Wired <br /> backlit keyboard
              </h3>
              <h4>
                Легко очищается <br /> То что тебе нужно
              </h4>
              <a href="#">Подробнее</a>
            </div>
          </div>
          <div className={styles.card_one}>
            {/* <div className={styles.card_img}> */}
            <img src="/images/qwertyuiop.png" alt="" />
            {/* </div> */}
            <div className={styles.card_text}>
              <h3>
                Slim W1 Wired <br /> backlit keyboard
              </h3>
              <h4>
                Легко очищается <br /> То что тебе нужно
              </h4>
              <a href="#">Подробнее</a>
            </div>
          </div>
        </div>
      </div>
      <span>Категории</span>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div>
            <h5>iPhone</h5>
            <a href="/apple-iphone">Смотреть модели </a>
          </div>
          <img
            src="/images/airpods.png"
            alt=""
            style={{ width: 260, height: 240 }}
          />
        </div>
        <div>
          <div className={styles.flex}>
            <div className={styles.card1}>
              <div className={styles.qwe}>
                <h5>JBL</h5>
                <a href="/jbl">
                  Посмотреть <br /> подробнее{" "}
                </a>
                <img
                  src="/images/mac.png"
                  alt=""
                  style={{ width: 215, height: 130 }}
                />
              </div>
            </div>
            <div className={styles.card1}>
              <div className={styles.qwe}>
                <h5>Apple TV</h5>
                <a href="/apple-tv">
                  Посмотреть <br /> подробнее{" "}
                </a>
                <img
                  src="/images/mac.png"
                  alt=""
                  style={{ width: 215, height: 130 }}
                />
              </div>
            </div>
          </div>
          <div className={styles.carde}>
            <div>
              <h5>iPad</h5>
              <a href="/apple-ipad">Смотреть модели </a>
            </div>
            <img
              src="/images/ipad.png"
              alt=""
              style={{ width: 180, height: 130 }}
            />
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <h5>Mac</h5>
            <a href="/apple-mac">Смотреть модели </a>
          </div>
          <img
            src="/images/iphone.png"
            alt=""
            style={{ width: 200, height: 320 }}
          />
        </div>
      </div>
      <div className={styles.three}>
        <span>Рекомендуемое</span>
        <div className={styles.three_cards}>
          <div className={styles.three_card}>
            <img src="/images/imac.png" alt=""  style={{width: 250,height: 260}}/>
            <h3>IMac</h3>
          </div>
          <div className={styles.three_card}>
            <img src="/images/ctol.png" alt="" />
            <h3>Компьютерный стол</h3>
          </div>
          <div className={styles.three_card}>
            <img src="/images/ctol.png" alt="" />
            <h3>Компьютерный стол</h3>
          </div>
          <div className={styles.three_card}>
            <img src="/images/comp.png" alt="" />
            <h3>Компьютерный стол</h3>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Card;
