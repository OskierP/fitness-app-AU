import { getPosition } from "./Service/API";
import { Link } from 'react-router-dom';

export function NavigaionBar() {

    if(getPosition() === "Manager"){
        return (
            <div>
                <table className="navbar">
                    <thead>
                        <tr>
                            <td><Link to='/'>Logout</Link></td>
                            <td><Link to='/createUser'>Create User</Link></td>
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
                    <td><Link to='/'>Logout</Link></td>
                    <td><Link to='/createUser'> Create User </Link></td>
                    <td><Link to='/createWorkout'>Create Workout Program</Link></td>
                    <td><Link to='/addExercise'>Add Exercise</Link></td>
                    <td><Link to='/clientsTrainer'>Show clients</Link></td>
                    <td><Link to='/workoutTrainer'>Show all workouts</Link></td>
                </tr></thead></table>
                <br/>
            </div>
            
         
        );
    }
    else if(getPosition() === "Client"){
        return (
            <div>
                <table className="navbar"><thead><tr>
                    <td><Link to='/'>Logout</Link></td>
                    <td><Link to='/clientWorkout'> View Workout Program </Link></td>
                </tr></thead></table>
                <br/>
            </div>
            
         
        );
    }
    else{
        return (
            <div>
                <table className="navbar"><thead><tr>
                    <td><Link to='/'>Logout</Link></td>
                    </tr></thead></table>
                
            </div>
         
        );
    }

}