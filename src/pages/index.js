import ExampleCaseSlider from '@/views/ExampleCaseSlider/ExampleCaseSlider';
import styles from '../page.module.css';
import TitleMain from '@/views/TitleMain/TitleMain';

export default function Home() {
    return (
        <>
            <main className={styles.main}>
                <TitleMain />
                <div className={styles.background}>
                    <div className={styles.backgroundLayer}></div>
                    {/* <iframe
                        // src='https://www.youtube.com/embed/5XkIP5Vlicc?autoplay=1&amp;loop=1&amp;enablejsapi=1&amp;playerapiid=featuredytplayer&amp;controls=0&amp;modestbranding=1&amp;rel=0&amp;showinfo=0&amp;color=white&amp;iv_load_policy=3&amp;theme=light&amp;wmode=transparent&amp;origin=https://headcraft.ru&amp;playlist=5XkIP5Vlicc&amp;mute=1'
                        src='https://rutube.ru/play/embed/8786e169aa665883425b30e054e8368f/'
                        id='widget2'
                        style={{ height: "100vh", width: "100vw", border: 'none' }}
                        title='Заставка начальная'
                        frameBorder="0" 
                        allow="clipboard-write; autoplay" 
                        webkitAllowFullScreen="true"
                        mozallowfullscreen="true"
                        allowFullScreen="true"
                    ></iframe> */}
                    <iframe 
                        style={{ height: "100vh", width: "100vw", border: 'none' }}
                        src="https://rutube.ru/play/embed/392febf69e1b5cb6204d95a50b057eb6?autoplay=1&amp;loop=1&amp;enablejsapi=1&amp;controls=0&amp;mute=1" 
                        frameBorder="0" 
                        allow="clipboard-write; autoplay" 
                        webkitAllowFullScreen 
                        mozallowfullscreen 
                        allowFullScreen
                    ></iframe>  
                </div>
            </main>
            <section className={styles.block + " " + "about"}>
                <h3>О нас</h3>
                <div className={styles.content + " " + styles.textRight}>
                    <img alt="картинка" src='https://sun9-61.userapi.com/impg/9Zf2G-ICSKRXXXBvQLwgX7I74DKfuB5cqddixg/bqU6NN3bsw8.jpg?size=479x479&quality=95&sign=7b2bc71208ff59e309afbde4c04adf7e&type=album' />
                    <span className='text'>
                        <ul>
                            <li>Помощь в составлении и реализации сметы, коммерческое предложение</li>
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
                    <img alt="картинка" src='https://sun9-61.userapi.com/impg/9Zf2G-ICSKRXXXBvQLwgX7I74DKfuB5cqddixg/bqU6NN3bsw8.jpg?size=479x479&quality=95&sign=7b2bc71208ff59e309afbde4c04adf7e&type=album' />
                    <span className='text'>lorem ipsum</span>
                </div>
            </section>
            <section className={styles.block + " " + "clients"}>
                <h3>Для кого</h3>
                <div className={styles.content + " " + styles.textRight}>
                    <img alt="картинка" src='https://sun9-61.userapi.com/impg/9Zf2G-ICSKRXXXBvQLwgX7I74DKfuB5cqddixg/bqU6NN3bsw8.jpg?size=479x479&quality=95&sign=7b2bc71208ff59e309afbde4c04adf7e&type=album' />
                    <span className='text'>lorem ipsum</span>
                </div>
            </section>
            <section className={styles.block + " " + "works"}>
                {/* <h3>Наши работы</h3>
                <div className={styles.content + " " + styles.textLeft}>
                    <img alt="картинка" src='https://sun9-61.userapi.com/impg/9Zf2G-ICSKRXXXBvQLwgX7I74DKfuB5cqddixg/bqU6NN3bsw8.jpg?size=479x479&quality=95&sign=7b2bc71208ff59e309afbde4c04adf7e&type=album' />
                    <span className='text'>lorem ipsum</span>
                </div> */}
                <ExampleCaseSlider />
            </section>
            <section className={styles.block + " " + "contacts"}>
                <h3>Контакты</h3>
                <div className={styles.content + " " + styles.textRight}>
                    <img alt="картинка" src='https://sun9-61.userapi.com/impg/9Zf2G-ICSKRXXXBvQLwgX7I74DKfuB5cqddixg/bqU6NN3bsw8.jpg?size=479x479&quality=95&sign=7b2bc71208ff59e309afbde4c04adf7e&type=album' />
                    <span className='text'>lorem ipsum</span>
                </div>
            </section>
            <section className={styles.block + " " + "form"}>
                <h3>Обратная связь</h3>
                <div className={styles.content + " " + styles.textLeft}>
                    <img alt="картинка" src='https://sun9-61.userapi.com/impg/9Zf2G-ICSKRXXXBvQLwgX7I74DKfuB5cqddixg/bqU6NN3bsw8.jpg?size=479x479&quality=95&sign=7b2bc71208ff59e309afbde4c04adf7e&type=album' />
                    <span className='text'>lorem ipsum</span>
                </div>
            </section>
        </>
    );
}
