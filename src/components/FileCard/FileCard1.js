import React from 'react';
import * as Icon from 'react-feather';
import Button from 'components/Button/Button';
import styles from './FileCard1.module.scss';
import { useDirectory } from 'hooks/DirectoryContext';
import RowActions1 from 'components/RowActions/RowActions1';

const FileCard1 = ({path, dirname, basename})=> {
  const { rmdir } = useDirectory();
  const deep = dirname === "/" ? 0 : dirname.split("/").length-1;

  return (
    <div className={styles.file_card}
      style={{paddingLeft: `${deep*20}px`}}>
      <p className={styles.pathname}>{basename}</p>
      <div className={styles.actions}>
        <RowActions1>
          <Button 
            icon={Icon.X} 
            silverTheme={true} 
            onClick={()=> rmdir(path)}/>
        </RowActions1>
      </div>
    </div>
  )
}

export default FileCard1;