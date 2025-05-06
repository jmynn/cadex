import styles from './index.module.css';
import { ReactNode } from 'react';
import NextLink from 'next/link';
import { PATHS } from '@/data';

const Logo = (): ReactNode => {
  return (
    <NextLink href={PATHS.HOME} className={styles.logo}>
      Some Company
    </NextLink>
  );
};

export default Logo;
