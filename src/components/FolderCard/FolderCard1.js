import React from 'react';
import * as Icon from 'react-feather';
import Button from 'components/Button/Button';
import styles from './FolderCard1.module.scss';
import { useViewport } from 'hooks/ViewportContext';
import { useDirectory } from 'hooks/DirectoryContext';
import RowActions1 from 'components/RowActions/RowActions1';
import DirectoryList1 from 'components/DirectoryList/DirectoryList1';

const FolderCard1 = ({path, dirname, basename})=> {
  const [opened, setOpened] = React.useState(false);
  const { rmdir } = useDirectory();
  const { isMobile } = useViewport();
  const deep = dirname === "/" ? 0 : dirname.split("/").length-1;

  return (
    <React.Fragment>
      <div className={styles.folder_card} 
        style={{paddingLeft: `${deep*20}px`}}
        onClick={()=> setOpened(opened ? false : true)}>
        {opened ? 
        <Icon.ChevronDown className={styles.icon}/> :
        <Icon.ChevronRight className={styles.icon}/>}
        <p className={styles.pathname}>{basename}</p>
        <div className={styles.actions}>
          {!isMobile && 
          <RowActions1>
            <Button 
              icon={Icon.X} 
              silverTheme={true} 
              onClick={()=> rmdir(path)}/>
          </RowActions1>}
        </div>
      </div>
      {opened && <DirectoryList1 path={path}/>}
    </React.Fragment>
  )
}

export default FolderCard1;