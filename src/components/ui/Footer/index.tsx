import Logo from '../Logo';
import styles from './index.module.css';
import { ReactNode } from 'react';

const Footer = (): ReactNode => {
  return (
    <footer className={styles.footer}>
      <Logo /> 2024
    </footer>
  );
};

export default Footer;
