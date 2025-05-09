import ButtonLinkContactUs from '../ButtonLinkContactUs';
import Logo from '../Logo';
import styles from './index.module.css';
import { ReactNode } from 'react';

const Header = (): ReactNode => {
  return (
    <header className={styles.header}>
      <Logo />
      <ButtonLinkContactUs style={{ padding: '10px 4.43%' }} />
    </header>
  );
};

export default Header;
