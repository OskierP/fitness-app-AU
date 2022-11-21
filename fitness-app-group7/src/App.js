
import './App.css';
import Login from './Login';
import {Register} from './Register'
import React, {useState} from 'react';

function App() {
  const [currentForm, setCurrentForm] = useState('login')

  const toggleFrom = (formName) =>{
    setCurrentForm(formName);
  }
  return (
    <div className='App'>
      <Login/>

    </div>



 
  );
}

export default App;
