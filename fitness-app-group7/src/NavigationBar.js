import { getPosition } from "./Service/API";
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";

export function NavigaionBar() {

    if(getPosition() === "Manager"){
        return (
            <div>
                <table className="navbar">
                    <thead>
                        <tr>
                            <td><Link to='/'><Button>Logout</Button></Link></td>
                            <td><Link to='/createUser'><Button>Create User</Button></Link></td>
                            <td><Link to='/allUsers'><Button>Show all users</Button></Link></td>
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
                    <td><Link to='/'><Button >Logout</Button></Link></td>
                    <td><Link to='/createUser'><Button> Create User </Button></Link></td>
                    <td><Link to='/createWorkout'><Button>Create Workout Program</Button></Link></td>
                    <td><Link to='/addExercise'><Button>Add Exercise</Button></Link></td>
                    <td><Link to='/clientsTrainer'><Button>Show clients</Button></Link></td>
                    <td><Link to='/workoutTrainer'><Button>Show all workouts</Button></Link></td>
                </tr></thead></table>
                <br/>
            </div>
            
         
        );
    }
    else if(getPosition() === "Client"){
        return (
            <div>
                <table className="navbar"><thead><tr>
                    <td><Link to='/'><Button >Logout</Button></Link></td>
                    <td><Link to='/clientWorkout'><Button> View Workout Program </Button></Link></td>
                </tr></thead></table>
                <br/>
            </div>
            
         
        );
    }
    else{
        return (
            <div>
                <table className="navbar"><thead><tr>
                    <td><Link to='/'><Button>Logout</Button></Link></td>
                    </tr></thead></table>
                
            </div>
         
        );
    }

}