import React from 'react';
import AddBar1 from 'components/Bar/AddBar1';
import styles from './DirectoryBlock1.module.scss';
import { useViewport } from 'hooks/ViewportContext';
import DirectoryList1 from 'components/DirectoryList/DirectoryList1';

const DirectoryBlock1 = ()=> {
  const directoryBlockRef = React.useRef();
  const { isMobile } = useViewport();

  React.useEffect(()=> {
    if(isMobile) {
      const directoryBlock = directoryBlockRef.current;
  
      const updateMinHeight = ()=> {
        const rect = directoryBlock.getBoundingClientRect();
        directoryBlock.style.minHeight = `${window.innerHeight - rect.top}px`; 
      }
  
      updateMinHeight();
      window.addEventListener("resize", updateMinHeight);
      return ()=> window.removeEventListener("resize", updateMinHeight);
    }
  }, [isMobile]);

  return (
    <div className={styles.directory_block} 
      ref={directoryBlockRef}>
      <div className={styles.header}>
        <AddBar1/>
      </div>
      <div className={styles.main}>
        <DirectoryList1 path="/" emptySentence={true}/>
      </div>
    </div>
  )
}

export default DirectoryBlock1;