import styles from '../../page.module.css';
import PaddingBox from '@/components/PaddingBox/PaddingBox';
import ClientsSlider from '@/views/ClientsSlider/ClientsSlider';
import ExampleCaseSlider from '@/views/ExampleCaseSlider/ExampleCaseSlider';
import TitleVuzam from '@/views/TitleVuzam/TitleVuzam';

// Отрядам
export default function Page() {
  return (
    <main className={styles.main}>
      <PaddingBox />
      <TitleVuzam />
      <PaddingBox />
      <ExampleCaseSlider />
      <PaddingBox />
      <ClientsSlider />
    </main>
  );
}
