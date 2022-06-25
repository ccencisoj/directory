import React from 'react';
import clsx from 'clsx';
import styles from './Field.module.scss';

const Field = ({
  name,
  label, 
  placeholder, 
  defaultValue,
  beforeValue,
  value,
  actions,
  error, 
  smallFontSize,
  mediumFontSize,
  onChange,
  onBlur,
  onFocus,
  onKeyDown
})=> {
  const [focused, setFocused] = React.useState(false);
  const inputRef = React.useRef();

  const styles_field = clsx({
    [styles.field]: true,
    [styles.focused]: focused,
    [styles.small_font_size]: smallFontSize,
    [styles.medium_font_size]: mediumFontSize,
  });

  React.useEffect(()=> {
    const input = inputRef.current;
    input.addEventListener("focus", (ev)=> setFocused(true));
    input.addEventListener("blur", (ev)=> setFocused(false));
  }, []);

  return (
    <div className={styles_field}>
      <p className={styles.label}>{label}</p>
      <div className={styles.row}>
        <p className={styles.before_value}>{beforeValue}</p>
        <input 
          ref={inputRef}
          className={styles.input} 
          type="text" 
          name={name}
          placeholder={placeholder} 
          defaultValue={defaultValue}
          value={value}
          onBlur={onBlur}
          onFocus={onFocus}
          onChange={onChange}
          onKeyPress={onKeyDown}/>
        <div className={styles.actions}>{actions}</div>
      </div>
      <p className={styles.error}>{error}</p>
    </div>
  )
}

export default Field;