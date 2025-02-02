import ContactBlock from "@/components/ContactBlock/ContactBlock";
import styles from "../../page.module.css";

export default function Page() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>Hello World /about</p>
          <p>Символика - ИП Афонин</p>
          для ВУЗОВ для объединений для отрядов для лагерей для профсоюзов
          грантополучателям
        </div>
      </main>
      <section className={styles.block + " " + "contacts"}>
        <ContactBlock />
      </section>
    </>
  );
}
