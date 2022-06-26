import React from 'react';
import store from 'store';
import axios from 'axios';
import { Provider } from 'react-redux';
import { TokenProvider } from 'hooks/TokenContext';
import { ViewportProvider } from 'hooks/ViewportContext';
import { DirectoryProvider } from 'hooks/DirectoryContext';

import "../../public/scss/reset.scss";
import "../../public/scss/variables.scss";

const App = (props)=> {
  const { Component, pageProps } = props;

  return (
    <Provider store={store}>
      <TokenProvider>
        <ViewportProvider>
          <DirectoryProvider>
            <Component {...pageProps}/>
          </DirectoryProvider>
        </ViewportProvider>
      </TokenProvider>
    </Provider>
  )
}

export default App;