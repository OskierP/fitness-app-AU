
import './App.css';
import { Link } from 'react-router-dom';
import { getTokenLogin, getPosition, setToken } from "./Service/API"

export function GetUsersPage() {



  return (
    <div className='App'>
        <Link to='/'> Home </Link>
        
        <Link to='/create'> CreateUser </Link>
    </div>
 
  );
}

// export default GetUsersPage;
