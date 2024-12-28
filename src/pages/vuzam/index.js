import ClientsSlider from '@/views/ClientsSlider/ClientsSlider';
import styles from '../../page.module.css';
import PaddingBox from '@/components/PaddingBox/PaddingBox';
import ExampleCaseSlider from '@/views/ExampleCaseSlider/ExampleCaseSlider';
import TitleVuzam from '@/views/TitleVuzam/TitleVuzam';

// Главная
export default function Page() {
  return (
    <main className={styles.main}>
      <PaddingBox />
      <ClientsSlider />
      <PaddingBox />
      <TitleVuzam />
      <PaddingBox />
      <ExampleCaseSlider />
    </main>
  );
}
