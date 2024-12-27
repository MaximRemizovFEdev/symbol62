import Link from 'next/link';
import styles from './style.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.flexRow}>
                <div className={styles.flexCol}>
                    <img src='' alt='logo' />
                    <h4>Рязань</h4>
                    <h5>Символика</h5>
                    <h6>ИП Афонин</h6>
                </div>
                <div className={styles.quickContact}>
                    <p>VK link</p>
                </div>
            </div>
            <div className={styles.flexRow}>
                <div className={styles.nav + " " + styles.flexRow}>
                    <div className={styles.flexCol}>
                        <Link href='/'>Главная</Link>
                        <Link href='/vuzam'>ВУЗам</Link>
                        <Link href='/group'>Отрядам</Link>
                        <Link href='/unity'>Объединениям</Link>
                    </div>
                    <div className={styles.flexCol}>
                        <Link href='/committee'>Профкомам</Link>
                        <Link href='/public'>Общественным организациям</Link>
                        <Link href='/company'>Компаниям</Link>
                        <Link href='/grants'>Авторам грантов</Link>
                    </div>
                    <div className={styles.flexCol}>
                        <Link href='/org'>Организаторам мероприятий</Link>
                        <Link href='/camp'>Лагерям</Link>
                        <Link href='/works'>Наши работы</Link>
                        <Link href='/contact'>Контакты</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
