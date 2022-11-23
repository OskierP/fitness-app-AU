import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {GetUsersPage} from './GetUserPage'
import {LoginPage} from './Login'
import {CreateUser} from './CreateUser';
import { CreateWorkoutProgram } from './CreateWorkoutProgram';
import { AddExercise } from './AddExercise';

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
                </Routes>
            </Router>
        </div>
    );
}

export default App;

