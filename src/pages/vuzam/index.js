import ClientsSlider from '@/views/ClientsSlider/ClientsSlider';
import styles from '../../page.module.css';
import PaddingBox from '@/components/PaddingBox/PaddingBox';
import ExampleCaseSlider from '@/views/ExampleCaseSlider/ExampleCaseSlider';
import TitleVuzam from '@/views/TitleVuzam/TitleVuzam';

export const getServerSideProps = async () => {
  const clietnsContent = [ 
      {id: "124", imgUrl: "https://commerce.nearform.com/open-source/nuka-carousel/img/nearform-logo-white.svg", imgAlt: "политех"},
      {id: "111", imgUrl: "https://rsreu.ru/templates/rrtustyle/images/pic/logo_text.svg#logo", imgAlt: "rsreu"}, 
      {id: "112", imgUrl: "https://rimsou.ru/wp-content/themes/rimsou/svg/logo.svg", imgAlt: "политех"},
      {id: "113", imgUrl: "https://sun9-28.userapi.com/impg/bww9qSSF2MkxUyfwRYR1T1i6V-o7gFtS0T5hMA/MlxCBncKvjw.jpg?size=2000x2000&quality=95&sign=841de62ed69f5bba98487b06106db227&type=album", imgAlt: "политех"},
      {id: "114", imgUrl: "https://commerce.nearform.com/open-source/nuka-carousel/img/nearform-logo-white.svg", imgAlt: "политех"},
      {id: "115", imgUrl: "https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci84NGUyYzdlNjY1ZWFmNTYyYTc3NTY0Y2I4MmZlZGI2Yj9zaXplPTEwMCZkZWZhdWx0PXJldHJvIn0.ImOVZj4__mz4InwjNxx1MZ8aYRoqW6D8QbryJKMlZQo", imgAlt: "политех"},
  ];

  const exampleContent = [ 
    {id: "124", imgUrl: "/199215810_2808277852.jpg", imgAlt: "политех"},
    {id: "111", imgUrl: "/201938762_3935429286.jpg", imgAlt: "rsreu"}, 
    {id: "112", imgUrl: "/rp-Ke5GnVaU.jpg", imgAlt: "политех"},
    {id: "113", imgUrl: "/199215810_2808277852.jpg", imgAlt: "политех"},
    {id: "114", imgUrl: "/rp-Ke5GnVaU.jpg", imgAlt: "политех"},
    {id: "115", imgUrl: "/201938762_3935429286.jpg", imgAlt: "политех"},
];

  return {
      props: {
        clietnsContent: clietnsContent,
        exampleContent: exampleContent,
      }
  }
}

// Главная
export default function Page(props) {
  return (
    <main className={styles.main}>
      <PaddingBox />
      <ClientsSlider content={props.clietnsContent}/>
      <PaddingBox />
      <TitleVuzam />
      <PaddingBox />
      <ExampleCaseSlider content={props.exampleContent} />
    </main>
  );
}
