import axios from 'axios';

const baseURL = "http://192.168.100.6:3000/api";
let token = null;

const requests = {
  get: (url, config)=> 
    axios.get(`${baseURL}/${url}`, config),

  post: (url, data, config)=>
    axios.post(`${baseURL}/${url}`, data, config),

  put: (url, data, config)=>
    axios.put(`${baseURL}/${url}`, data, config),

  delete: (url, config)=>
    axios.delete(`${baseURL}/${url}`, config)
};

const User = {
  get: ()=> 
    requests.get("/user")
};

const Directory = {
  getAll: ()=>
    requests.post("/directory/getDirectories", {token}),

  new: ({path, type})=>
    requests.post("/directory/addDirectory", {path, type, token}),

  delete: (directoryId)=>
    requests.post("/directory/deleteDirectory", {directoryId, token})
};

export default { 
  User,
  Directory,
  token,
  setToken: (_token)=> token = _token
};