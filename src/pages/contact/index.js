import { SendForm } from "../../components/SendForm/SendForm";
import styles from '../../page.module.css';

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Hello World /contact</p>
        <p>Телефон: 8 (910) 910 91 91</p>
        <hr></hr>
        <SendForm />
      </div>
    </main>
  );
}
