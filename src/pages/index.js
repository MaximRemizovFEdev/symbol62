import ExampleCaseSlider from "@/views/ExampleCaseSlider/ExampleCaseSlider";
import styles from "../page.module.css";
import TitleMain from "@/views/TitleMain/TitleMain";
import { VideoBackgroundMain } from "@/views/VideoBackgroundMain/VideoBackgroundMain";
import BGCircle from "@/components/BGCircle/BGCircle";
import ContactBlock from "@/components/ContactBlock/ContactBlock";

export const getServerSideProps = async () => {
  const videoUrl =
    "https://vkvideo.ru/video_ext.php?oid=-199531378&id=456239162&hd=2&autoplay=1&js_api=1&loop=1&controls=0&mute=1&muteв=1&volume=0";

  const exampleContent = [
    { id: "124", imgUrl: "/199215810_2808277852.jpg", imgAlt: "политех" },
    { id: "111", imgUrl: "/201938762_3935429286.jpg", imgAlt: "rsreu" },
    { id: "112", imgUrl: "/rp-Ke5GnVaU.jpg", imgAlt: "политех" },
    { id: "113", imgUrl: "/199215810_2808277852.jpg", imgAlt: "политех" },
    { id: "114", imgUrl: "/rp-Ke5GnVaU.jpg", imgAlt: "политех" },
    { id: "115", imgUrl: "/201938762_3935429286.jpg", imgAlt: "политех" },
  ];

  return {
    props: {
      videoUrl: videoUrl,
      exampleContent: exampleContent,
    },
  };
};

export default function Home(props) {
  return (
    <>
      <main className={styles.main}>
        <TitleMain />
        <div className={styles.background}>
          <div className={styles.backgroundLayer}></div>
          <VideoBackgroundMain videoUrl={props.videoUrl} />
        </div>
      </main>
      <div style={{ position: "relative" }}>
        <BGCircle numberOfCircles={3} speed={3} diameter={250} />
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
          <ExampleCaseSlider content={props.exampleContent} />
        </section>
        <section className={styles.block + " " + "contacts"}>
        <ContactBlock />
        </section>

        
      </div>
    </>
  );
}
