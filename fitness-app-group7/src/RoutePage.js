import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {LoginPage} from './Login'
import {CreateUser} from './CreateUser';
import { GetClientsTrainer } from './GetClientsTrainer';

import { GetWorkoutTrainer } from './WorkoutTrainer';
import { GetWorkoutDetails } from './WorkoutDetails';
import { CreateWorkoutProgram } from './CreateWorkoutProgram';
import { AddExercise } from './AddExercise';
import { GetUsersPage } from './GetUserPage';

function App(){
    return(

        <div className='App'>
            <Router>
                <Routes>
                    <Route path='/' element={<LoginPage/>}/>
                    <Route path='/users' element={<GetUsersPage/>}/>
                    <Route path='/createUser' element={<CreateUser/>}/>
                    <Route path='/createWorkout' element={<CreateWorkoutProgram/>}/>
                    <Route path='/addExercise' element={<AddExercise/>}/>
                    <Route path='/clientsTrainer' element={<GetClientsTrainer />}/>
                    <Route path='/workoutTrainer' element={<GetWorkoutTrainer/>}/>
                    <Route path='/workoutDetails' element={<GetWorkoutDetails/>}/>
                </Routes>
            </Router>

        </div>
    );
}

export default App;

