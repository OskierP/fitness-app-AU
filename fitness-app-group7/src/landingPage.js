
import './App.css';
import { Link } from 'react-router-dom';
import { getPosition } from './Service/API';

export default function LandingPage() {

  if (getPosition()=='Manager') {
    return (
      <div className='App'>
          <Link to='/'> Home </Link>
          <br/>
          <Link to='/create'> Create User </Link>  
      </div>
   
    );
    
  }else if (getPosition()=='PersonalTrainer') {
    return (
      <div className='App'>
          <Link to='/'> Home </Link>
          <br/>
          <Link to='/create'> Create User </Link>
          <br/>
          <Link to='/clientsTrainer'>Show clients</Link>
          <br/>
          <Link to='workoutTrainer'>Show all workouts</Link>
  
      </div>
   
    );
  } else {
    return(
      <div>Client</div>
    )
  }

}

// export default GetUsersPage;
