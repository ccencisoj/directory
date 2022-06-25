import React from 'react';
import styles from './RowActions1.module.scss';

const RowActions1 = ({children})=> {
  const [state, setState] = React.useState({});

  return (
    <div className={styles.row_actions}>
      {children}
    </div>
  )
}

export default RowActions1;