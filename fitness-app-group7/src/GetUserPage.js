
import './App.css';
import { Link } from 'react-router-dom';
import { getTokenLogin, getPosition, setToken } from "./Service/API"
import { NavigaionBar } from './NavigationBar';

export function GetUsersPage() {

  return(
    <NavigaionBar/>
  );
  /*
  return (
    <div className='App'>
        <Link to='/'> Logout </Link>
        
        <Link to='/createUser'> CreateUser </Link>

        <Link to='/createWorkout'> CreateWorkoutProgram </Link>
    </div>
 
  );
  */
}

// export default GetUsersPage;
