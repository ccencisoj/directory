import React from 'react';

const ViewportContext = React.createContext({
  width: null,
  height: null,
  isDesktop: false,
  isTablet: false,
  isMobile: false
});

const ViewportProvider = ({children})=> {
  const [value, setValue] = React.useState({
    width: null,
    height: null,
    isDesktop: false,
    isTablet: false,
    isMobile: false
  });

  const getViewport = ()=> {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const isMobile = window.innerWidth <= 640;
    const isDesktop = window.innerWidth >= 1024;
    const isTablet = window.innerWidth > 640 && window.innerWidth < 1024; 
    return { width, height, isDesktop, isTablet, isMobile };
  }

  const resizedWindow = ()=> {
    const viewport = getViewport();
    setValue(viewport);
  }

  React.useEffect(()=> {
    const viewport = getViewport();
    setValue(viewport);
    window.addEventListener("resize", resizedWindow);
  }, []);

  return (
    <ViewportContext.Provider value={value}>
      {children}
    </ViewportContext.Provider>
  )
} 

const useViewport = ()=> {
  return React.useContext(ViewportContext);
}

export { ViewportProvider, useViewport };