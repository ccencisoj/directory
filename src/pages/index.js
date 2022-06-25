import React from 'react';
import Page from 'components/Page/Page';
import { PRIMARY_BACKGROUND } from 'constants/background';
import MainHeader1 from 'components/MainHeader/MainHeader1';
import DirectoryBlock1 from 'components/DirectoryBlock/DirectoryBlock1';

const Index = ()=> {
  return (
    <Page 
      style={{
        paddingBottom: "10vh",
        backgroundColor: PRIMARY_BACKGROUND
      }}
      mobileStyle={{
        paddingBottom: "0vh"
      }}>
      <MainHeader1 
        image="image/logo1.svg"
        title="Directory." 
        sentence="Tu herramienta para agregar y 
        ordenar nombres de directorios y archivos"/>
      <DirectoryBlock1/>
    </Page>
  )
}

export default Index;