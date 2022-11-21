
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

    {currentForm == "login" ? <Login onFormSwitch={toggleFrom}/>:<Register onFormSwitch={toggleFrom}/>}

    </div>



 
  );
}

export default App;
