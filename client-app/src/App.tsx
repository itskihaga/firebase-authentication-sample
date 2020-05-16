import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios'

const axios = Axios.create({
  baseURL:'http://localhost:8080'
})

interface User {
  name:string;
  comment:string;
}

function App() {
  const [userState,setUserState] = useState<User>()
  useEffect(() => {
    axios.get('/secret/user').then(({data}) => {
      setUserState({
        name: data.name,
        comment:data.comment
      })
    })
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {userState && <div>
            <p>Hi {userState.name}!!</p>
            <p>{userState.comment}</p>
        </div>}
      </header>
    </div>
  );
}

export default App;
