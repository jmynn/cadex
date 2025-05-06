import CardMiddle from '../CardMiddle';
import styles from './index.module.css';
import { ReactNode } from 'react';

const CardsMiddle = (): ReactNode => {
  return (
    <div className={styles.cards}>
      {new Array(6).fill(null).map((_, i) => (
        <CardMiddle
          key={`${i}-card-middle`}
          title="Title"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum "
        />
      ))}
    </div>
  );
};

export default CardsMiddle;
