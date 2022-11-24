import { getPosition } from "./Service/API";
import { Link } from 'react-router-dom';

export function NavigaionBar() {

    if(getPosition() === "Manager"){
        return (
            <div>
                <table className="navbar">
                    <thead>
                        <tr>
                            <td><Link to='/'> Logout </Link></td>
                            <td><Link to='/createUser'> CreateUser </Link></td>
                        </tr>
                    </thead>
                </table>
            </div>
         
        );
    }
    else if(getPosition() === "PersonalTrainer"){
        return (
            <div>
                <table className="navbar"><thead><tr>
                    <td> <Link to='/'> Logout </Link></td>
                    <td><Link to='/createUser'> CreateUser </Link></td>
                    <td><Link to='/createWorkout'> CreateWorkoutProgram </Link></td>
                    <td><Link to='/addExercise'> AddExercise </Link></td>
                    <td><Link to='/clientsTrainer'>Show clients</Link></td>
                    <td><Link to='/workoutTrainer'>Show all workouts</Link></td>
                </tr></thead></table>
                <br/>
            </div>
            
         
        );
    }
    else{
        return (
            <div>
                <table className="navbar"><thead><tr>
                    <td><Link to='/'> Logout </Link></td>
                    </tr></thead></table>
                
            </div>
         
        );
    }

}