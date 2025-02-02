import ContactBlock from "@/components/ContactBlock/ContactBlock";
import styles from "../../page.module.css";

export default function Page() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1>Карта: Рязань, ул Радищева, 43</h1>
          <div id="map">
            <iframe
              src="https://yandex.ru/map-widget/v1/-/CCUBP-YE1D"
              width="100%"
              height="400"
              frameborder="0"
            ></iframe>
          </div>
          <p>ИП Афонин</p>
        </div>
      </main>
      <section className={styles.block + " " + "contacts"}>
        <ContactBlock />
      </section>
    </>
  );
}
