import ButtonLinkContactUs from '@/components/ui/ButtonLinkContactUs';
import styles from './index.module.css';
import { ReactNode } from 'react';

const SectionLess = (): ReactNode => {
  return (
    <section className={styles.section}>
      <h4 className={styles.title}>Less important title</h4>
      <ButtonLinkContactUs />
    </section>
  );
};

export default SectionLess;
