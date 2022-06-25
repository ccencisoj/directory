import React from 'react';
import styles from './DirectoryList1.module.scss';
import { useDirectory } from 'hooks/DirectoryContext';
import DirectoryCard1 from 'components/DirectoyCard/DirectoryCard1';

const DirectoryList1 = ({path, emptySentence})=> {
  const { listdir } = useDirectory();
  const { folders, files } = listdir(path);

  return (
    <div className={styles.directory_list}>        
      {folders.map((folder)=> 
        <DirectoryCard1 key={folder.id} {...folder}/>)}
      {files.map((file)=> 
        <DirectoryCard1 key={file.id} {...file}/>)}
      {emptySentence && folders.length === 0 && files.length === 0 && 
        <p className={styles.sentence}>No hay elementos</p>}
    </div>
  )
}

export default DirectoryList1;