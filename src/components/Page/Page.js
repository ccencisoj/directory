import React from 'react';
import styles from './Page.module.scss';
import { useViewport } from 'hooks/ViewportContext';

const Page = ({
  children, 
  style,
  mobileStyle, 
  tabletStyle, 
  desktopStyle
})=> {
  const { isMobile, isTablet, isDesktop } = useViewport();
  const pageRef = React.useRef();

  React.useEffect(()=> {
    const page = pageRef.current;

    const initialStyle = ()=> {
      Object.entries(mobileStyle||{}).forEach(([key])=> page.style[key] = "initial");
      Object.entries(tabletStyle||{}).forEach(([key])=> page.style[key] = "initial");
      Object.entries(desktopStyle||{}).forEach(([key])=> page.style[key] = "initial");
      Object.entries(style||{}).forEach(([key, value])=> page.style[key] = value);
    }

    if(isMobile) Object.assign(page.style, mobileStyle);
    else if(isTablet) Object.assign(page.style, tabletStyle);
    else if(isDesktop) Object.assign(page.style, desktopStyle);
    else initialStyle();

    return ()=> initialStyle();
  });

  return (
    <div className={styles.page} style={style} ref={pageRef}>{children}</div>
  )
}

export default Page;