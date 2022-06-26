import React from 'react';
import agent from 'agent';
import pathResolver from 'path';
import { orderBy } from "lodash";
import { useToken } from 'hooks/TokenContext';
import { FILE, FOLDER } from 'constants/common';

const DirectoryContext = React.createContext({
  directories: Array,
  mkdir: Function,
  rmdir: Function,
  listdir: Function
});

const DirectoryProvider = ({children})=> {
  const [state, setState] = React.useState({directories: []});
  const token = useToken();

  const loadDirectories = (directories)=> {
    directories = orderBy(directories, ['path'],['asc']);
    setState((prevState)=> ({...prevState, directories}));
  }

  const exists = (path)=>  {
    const directories = state.directories;
    return directories.find((dir)=> dir.path === path) == null ? false : true;
  }
  
  const find = (path)=> {
    return state.directories.find((dir)=> dir.path === path);
  }

  const freePath = (path)=> {
    for(let i = 2; i < Infinity; i++) 
      if(!exists(`${path} (${i})`)) return `${path} (${i})`;
  }
  
  const mkdir = (path, type)=> {
    path = pathResolver.resolve(path);
    
    // Si la ruta existe se crea una identica
    if(exists(path)) path = freePath(path);

    const dirname = pathResolver.dirname(path);

    // Crea los directories relacionados a la ruta
    if(dirname !== "/" && !exists(dirname)) mkdir(dirname, FOLDER);

    agent.Directory.new({path, type}).then((response)=> {
      const directory = response.data.directory;

      setState(({directories, ...prevState})=> {
        directories.push(directory);
        directories = orderBy(directories, ['path'],['asc']);
        return {...prevState, directories: [...directories]};
      });
    });
  } 

  const rmdir = (path)=> {
    path = pathResolver.resolve(path);
    const directory = find(path);

    if(directory == null)
      throw `Could not find the path '${path}'`;

    agent.Directory.delete(directory.id).then(()=> {
      setState(({directories, ...prevState})=> {
        directories = directories.filter((dir)=> dir.id !== directory.id);
        directories = orderBy(directories, ['path'],['asc']);
        return {...prevState, directories: [...directories]};
      });
    });
  }

  const listdir = (path)=> {   
    const directories = state.directories.filter((dir)=> dir.dirname === path);
    const folders = directories.filter((dir)=> dir.type === FOLDER);
    const files = directories.filter((dir)=> dir.type === FILE);
    return {folders, files};
  }

  React.useEffect(()=> {
    if(token) {
      agent.Directory.getAll().then((response)=> {
        const directories = response.data.directories;
        loadDirectories(directories);
      });
    }
  }, [token]);

  return (
    <DirectoryContext.Provider 
      value={{...state, mkdir, rmdir, listdir}}>
      {children}
    </DirectoryContext.Provider>
  )
}

const useDirectory = ()=> {
  return React.useContext(DirectoryContext);
}

export { DirectoryProvider, useDirectory };