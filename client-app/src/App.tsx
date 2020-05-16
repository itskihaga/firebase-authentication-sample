import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios'

const axios = Axios.create({
  baseURL:'http://localhost:8080'
})

interface User {
  name:string;
}

function App() {
  const [userState,setUserState] = useState<User>()
  useEffect(() => {
    axios.get('/secret/user').then(({data}) => {
      setUserState({
        name: data.name
      })
    })
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {userState && <p>{userState.name}</p>}
      </header>
    </div>
  );
}

export default App;
