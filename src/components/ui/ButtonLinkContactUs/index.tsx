import NextLink from 'next/link';
import styles from './index.module.css';
import { CSSProperties, FunctionComponent, ReactNode } from 'react';
import { PATHS } from '@/data';

type Props = {
  style?: CSSProperties;
};

const ButtonLinkContactUs: FunctionComponent<Props> = ({
  style
}): ReactNode => {
  return (
    <NextLink href={PATHS.CONTACT_US} className={styles.link} {...{ style }}>
      Contact us
    </NextLink>
  );
};

export default ButtonLinkContactUs;
