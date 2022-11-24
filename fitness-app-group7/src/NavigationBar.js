import { getPosition } from "./Service/API";
import { Link } from 'react-router-dom';

export function NavigaionBar() {

    if(getPosition() === "Manager"){
        return (
            <div className='App'>
                <Link to='/'> Logout </Link>
                
                <Link to='/createUser'> CreateUser </Link>
            </div>
         
        );
    }
    else if(getPosition() === "PersonalTrainer"){
        return (
            <div className='App'>
                <Link to='/'> Logout </Link>
                
                <Link to='/createUser'> CreateUser </Link>
        
                <Link to='/createWorkout'> CreateWorkoutProgram </Link>

                <Link to='/addExercise'> AddExercise </Link>
            </div>
         
        );
    }
    else if(getPosition() === "Client"){
        return (
            <div className='App'>
                <Link to='/'> Logout </Link>
            </div>
         
        );
    }

}