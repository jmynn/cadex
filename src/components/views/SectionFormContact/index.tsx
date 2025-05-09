'use client';
import FormContactUs from '@/components/ui/FormContactUs';
import styles from './index.module.css';
import { ReactNode } from 'react';
import Providers from '@/providers';

const SectionFormContact = (): ReactNode => {
  return (
    <section className={styles.section}>
      <Providers>
        <FormContactUs />
      </Providers>
    </section>
  );
};

export default SectionFormContact;
