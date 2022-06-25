import React from 'react';
import styles from './MenuItem1.module.scss';

const MenuItem1 = ({icon: Icon, label, color, onClick})=> {
  return (
    <div className={styles.menu_item} 
      style={{"--color": color}} onClick={onClick}>
      {Icon && <Icon className={styles.icon}/>}
      {label && <p className={styles.label}>{label}</p>}
    </div>
  )
}

export default MenuItem1;