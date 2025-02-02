import TitleVuzam from "@/views/TitleVuzam/TitleVuzam";
import PaddingBox from "@/components/PaddingBox/PaddingBox";
import styles from "../../page.module.css";
import ContactBlock from "@/components/ContactBlock/ContactBlock";

export default function Page() {
  return (
    <>
      <main className={styles.main}>
        <PaddingBox />
        <TitleVuzam />
      </main>
      <section className={styles.block + " " + "contacts"}>
        <ContactBlock />
      </section>
    </>
  );
}
