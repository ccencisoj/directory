import React from 'react';
import store from 'store';
import axios from 'axios';
import { Provider } from 'react-redux';
import { TokenProvider } from 'hooks/TokenContext';
import { ViewportProvider } from 'hooks/ViewportContext';
import { DirectoryProvider } from 'hooks/DirectoryContext';

import "../../public/scss/reset.scss";
import "../../public/scss/variables.scss";
import agent from 'agent';

const App = (props)=> {
  const { Component, pageProps } = props;

  React.useEffect(()=> {
    agent.get("/api/mongo").then((response)=> {
      console.log(response);
    });

    axios.get("/api/example").then((response)=> {
      console.log(response);
    });

  }, []);

  return (
    <div>hola mundo</div>
  )

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