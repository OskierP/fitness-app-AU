
import './App.css';
import { Link } from 'react-router-dom';

export default function TrainerPage() {
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
}

// export default GetUsersPage;
