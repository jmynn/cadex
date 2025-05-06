import ButtonLinkContactUs from '../ButtonLinkContactUs';
import Logo from '../Logo';
import styles from './index.module.css';
import { ReactNode } from 'react';

const Header = (): ReactNode => {
  return (
    <header className={styles.header}>
      <Logo />
      <ButtonLinkContactUs />
    </header>
  );
};

export default Header;
