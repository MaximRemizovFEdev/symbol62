import ExampleCaseSlider from "@/views/ExampleCaseSlider/ExampleCaseSlider";
import styles from "../page.module.css";
import TitleMain from "@/views/TitleMain/TitleMain";
import { VideoBackgroundMain } from "@/views/VideoBackgroundMain/VideoBackgroundMain";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <TitleMain />
        <div className={styles.background}>
          <div className={styles.backgroundLayer}></div>
          <VideoBackgroundMain />
        </div>
      </main>
      <section className={styles.block + " " + "about"}>
        <h3>О нас</h3>
        <div className={styles.content + " " + styles.textRight}>
          <img
            alt="картинка"
            src="https://sun9-61.userapi.com/impg/9Zf2G-ICSKRXXXBvQLwgX7I74DKfuB5cqddixg/bqU6NN3bsw8.jpg?size=479x479&quality=95&sign=7b2bc71208ff59e309afbde4c04adf7e&type=album"
          />
          <span className="text">
            <ul>
              <li>
                Помощь в составлении и реализации сметы, коммерческое
                предложение
              </li>
              <li>Бесплатная доставка</li>
              <li>Работа по постоплате</li>
              <li>Широкий ассортимент</li>
              <li>Помощь в написании гранта</li>
              <li>Доступные цены</li>
            </ul>
          </span>
        </div>
      </section>
      <section className={styles.block + " " + "service"}>
        <h3>Услуги</h3>
        <div className={styles.content + " " + styles.textLeft}>
          <img
            alt="картинка"
            src="https://sun9-61.userapi.com/impg/9Zf2G-ICSKRXXXBvQLwgX7I74DKfuB5cqddixg/bqU6NN3bsw8.jpg?size=479x479&quality=95&sign=7b2bc71208ff59e309afbde4c04adf7e&type=album"
          />
          <span className="text">lorem ipsum</span>
        </div>
      </section>
      <section className={styles.block + " " + "clients"}>
        <h3>Для кого</h3>
        <div className={styles.content + " " + styles.textRight}>
          <img
            alt="картинка"
            src="https://sun9-61.userapi.com/impg/9Zf2G-ICSKRXXXBvQLwgX7I74DKfuB5cqddixg/bqU6NN3bsw8.jpg?size=479x479&quality=95&sign=7b2bc71208ff59e309afbde4c04adf7e&type=album"
          />
          <span className="text">lorem ipsum</span>
        </div>
      </section>
      <section className={styles.block + " " + "works"}>
        <ExampleCaseSlider />
      </section>
      <section className={styles.block + " " + "contacts"}>
        <h3>Контакты</h3>
        <div className={styles.content + " " + styles.textRight}>
          <img
            alt="картинка"
            src="https://sun9-61.userapi.com/impg/9Zf2G-ICSKRXXXBvQLwgX7I74DKfuB5cqddixg/bqU6NN3bsw8.jpg?size=479x479&quality=95&sign=7b2bc71208ff59e309afbde4c04adf7e&type=album"
          />
          <span className="text">lorem ipsum</span>
        </div>
      </section>
      <section className={styles.block + " " + "form"}>
        <h3>Обратная связь</h3>
        <div className={styles.content + " " + styles.textLeft}>
          <img
            alt="картинка"
            src="https://sun9-61.userapi.com/impg/9Zf2G-ICSKRXXXBvQLwgX7I74DKfuB5cqddixg/bqU6NN3bsw8.jpg?size=479x479&quality=95&sign=7b2bc71208ff59e309afbde4c04adf7e&type=album"
          />
          <span className="text">lorem ipsum</span>
        </div>
      </section>
    </>
  );
}
