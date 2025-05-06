import NextLink from 'next/link';
import styles from './index.module.css';
import { ReactNode } from 'react';
import { PATHS } from '@/data';

const ButtonLinkContactUs = (): ReactNode => {
  return (
    <NextLink href={PATHS.CONTACT_US} className={styles.link}>
      Contact us
    </NextLink>
  );
};

export default ButtonLinkContactUs;
