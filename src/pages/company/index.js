import TitleVuzam from '@/views/TitleVuzam/TitleVuzam';
import PaddingBox from '@/components/PaddingBox/PaddingBox';
import styles from '../../page.module.css';

export default function Page() {
  return (
    <main className={styles.main}>
      <PaddingBox />
      <TitleVuzam />
    </main>
  );
}
