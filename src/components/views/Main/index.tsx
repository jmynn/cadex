'use client';
import styles from './index.module.css';
import { ReactNode } from 'react';
import Providers from '@/providers';
import MainFrame from '@/components/ui/MainFrame';

const Main = (): ReactNode => {
  return (
    <main className={styles.main}>
      <div className={styles.info}>
        <h1 className={styles.title}>Most important title on the page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          mattis, leo et condimentum ultricies, sem urna convallis metus, vel
          suscipit nibh lacus tincidunt ante
        </p>
      </div>
      <div className={styles.frame}>
        <Providers>
          <MainFrame />
        </Providers>
      </div>
    </main>
  );
};

export default Main;
