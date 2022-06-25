import React from 'react';
import * as Icon from 'react-feather';
import { FOLDER } from 'constants/common';
import styles from './DirectoryCard1.module.scss';
import MenuModal1 from 'components/Modal/MenuModal1';
import FileCard1 from 'components/FileCard/FileCard1';
import MenuItem1 from 'components/MenuItem/MenuItem1';
import { useDirectory } from 'hooks/DirectoryContext';
import FolderCard1 from 'components/FolderCard/FolderCard1';
import ColumnActions1 from 'components/ColumnActions/ColumnActions1';

const DirectoryCard1 = ({type, ...props})=> {
  const [visibleModal, setVisibleModal] = React.useState(false);
  const { rmdir } = useDirectory();
  let currentTimeout = null;

  const handleTouchStart = ()=> {
    currentTimeout = setTimeout(()=> setVisibleModal(true), 400);
  }

  const handleTouchMove = ()=> {
    clearInterval(currentTimeout);
  }

  const handleTouchEnd = ()=> {
    clearInterval(currentTimeout);
  }

  return (
    <React.Fragment>
      <div className={styles.directory_card} 
        onTouchStart={handleTouchStart} 
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}>
        {type === FOLDER ? <FolderCard1 {...props}/> : <FileCard1 {...props}/> }
      </div>
      <MenuModal1 
        title={type === FOLDER ? 
        "Que quieres hacer con la carpeta?" :
        "Que quieres hacer con el archivo?"}
        visible={visibleModal} 
        hideModal={()=> setVisibleModal(false)}
        actions={
          <ColumnActions1>
            <MenuItem1 
              icon={Icon.Trash} 
              label="Eliminar" 
              color="#f00"
              onClick={()=> rmdir(props.path)}/> 
          </ColumnActions1>
        }/>
    </React.Fragment>
  )
}

export default DirectoryCard1;