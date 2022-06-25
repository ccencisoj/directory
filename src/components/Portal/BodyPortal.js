import React from 'react';
import ReactDOM from 'react-dom';

const BodyPortal = ({children})=> {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(()=> setMounted(true), []);

  return mounted ? ReactDOM.createPortal(children, document.body) : null;
}

export default BodyPortal;