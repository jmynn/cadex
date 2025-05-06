import CardsMiddle from '@/components/ui/CardsMiddle';
import styles from './index.module.css';
import { ReactNode } from 'react';
import ButtonLinkContactUs from '@/components/ui/ButtonLinkContactUs';

const SectionMiddle = (): ReactNode => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Also very important title</h2>
      <CardsMiddle />
      <ButtonLinkContactUs />
    </section>
  );
};

export default SectionMiddle;
