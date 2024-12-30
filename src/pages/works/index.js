import PaddingBox from '@/components/PaddingBox/PaddingBox';
import styles from '../../page.module.css';
import TitleVuzam from '@/views/TitleVuzam/TitleVuzam';

export default function Page() {
  return (
    <main className={styles.main}>
      <PaddingBox />
      <TitleVuzam />
    </main>
  );
}
