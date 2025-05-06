import styles from './index.module.css';
import { FunctionComponent } from 'react';

type Props = Record<'title' | 'text', string>;

const CardMiddle: FunctionComponent<Props> = ({ text, title }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default CardMiddle;
