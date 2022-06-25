import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

const Button = ({
  icon: Icon, 
  label,
  type,
  primary,
  secondary,
  silverTheme,
  onClick,
  onHover
})=> {
  const [state, setState] = React.useState({});

  const styles_button = clsx({
    [styles.button]: true,
    [styles.primary]: primary,
    [styles.secondary]: secondary,
    [styles.silver_theme]: silverTheme,
    [styles.icon_button]: Icon && !label
  }); 

  return (
    <button type={type || "button"} className={styles_button} 
      onClick={onClick} onMouseMove={onHover}>
      {Icon && <Icon className={styles.icon}/>}
      {label && <p className={styles.label}>{label}</p>}
    </button>
  )
}

export default Button;