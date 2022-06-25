import React from 'react';
import clsx from 'clsx';
import styles from './ColumnActions1.module.scss';

const ColumnActions1 = ({children, separated})=> {
  const styles_column_actions = clsx({
    [styles.column_actions]: true,
    [styles.separated]: separated
  });

  return (
    <div className={styles_column_actions}>
      {children}
    </div>
  )
}

export default ColumnActions1;