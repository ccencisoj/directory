import React from 'react';
import clsx from 'clsx';
import styles from './MenuModal1.module.scss';
import BodyPortal from 'components/Portal/BodyPortal';

const MenuModal1 = ({
  title, 
  actions,
  visible, 
  hideModal
})=> {
  const menuModalRef = React.useRef();
  const wrapperRef = React.useRef();

  const handleClick = (ev)=> {
    const menuModal = menuModalRef.current;
    const wrapper = wrapperRef.current;

    if(menuModal.contains(ev.target) && 
      !wrapper.contains(ev.target))
      hideModal();
  }

  const styles_menu_modal = clsx({
    [styles.menu_modal]: true,
    [styles.visible]: visible,
    [styles.hidden]: !visible
  });

  return (
    <BodyPortal>
      <div className={styles_menu_modal} ref={menuModalRef} onTouchStart={handleClick}>
        <div className={styles.wrapper} ref={wrapperRef}>
          <div className={styles.header}>
            {title && <p className={styles.title}>{title}</p>}
          </div>
          <div className={styles.main}>{actions}</div>
        </div>
      </div>
    </BodyPortal>
  )
}

export default MenuModal1;