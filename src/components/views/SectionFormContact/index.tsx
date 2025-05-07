import FormContactUs from '@/components/ui/FormContactUs';
import styles from './index.module.css';
import { ReactNode } from 'react';

const SectionFormContact = (): ReactNode => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Only CTA on the page</h1>
      <FormContactUs />
    </section>
  );
};

export default SectionFormContact;
