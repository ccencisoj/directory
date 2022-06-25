import React from 'react';
import styles from './MainHeader1.module.scss';

const MainHeader1 = ({title, sentence, image})=> {
  return (
    <div className={styles.main_header}>
      <div className={styles.column}>
        <div className={styles.row}>
          <img className={styles.image} src={image}/>
          <p className={styles.title}>{title}</p>
        </div>
        <p className={styles.sentence}>{sentence}</p>
      </div>
    </div>
  )
}

export default MainHeader1;