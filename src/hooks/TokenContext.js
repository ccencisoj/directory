import React from 'react';
import agent from 'agent';

const TokenContext = React.createContext({});

const TokenProvider = ({children})=> {
  const [token, setToken] = React.useState(null);

  React.useEffect(()=> {
    const storedToken = window.localStorage.getItem("token");

    if(storedToken != null) {
      agent.setToken(storedToken);
      return setToken(storedToken);
    }

    // Obteniene el token del servidor y 
    // almacena el token en el localstorage
    agent.User.get().then((response)=> {
      const token = response.data.token;
      window.localStorage.setItem("token", token);
      agent.setToken(token);
      setToken(token);
    });
  }, []);

  return (
    <TokenContext.Provider value={token}>
      {children}
    </TokenContext.Provider>
  )
}

const useToken = ()=> {
  return React.useContext(TokenContext);
}

export { TokenProvider, useToken };