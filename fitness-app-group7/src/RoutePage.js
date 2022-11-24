import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {LoginPage} from './Login'
import {CreateUser} from './CreateUser';
import { GetClientsTrainer } from './GetClientsTrainer';
import LandingPage from './LandingPage';
import { GetWorkoutTrainer } from './WorkoutTrainer';
import { GetWorkoutDetails } from './WorkoutDetails';

function App(){
    return(

        <div className='App'>
            <Router>
                <Routes>
                    <Route path='/' element={<LoginPage/>}/>
                    <Route path='/landingPage' element={<LandingPage/>}/>
                    <Route path='/create' element={<CreateUser/>}/>
                    <Route path='/clientsTrainer' element={<GetClientsTrainer />}/>
                    <Route path='/landingPage/workoutTrainer' element={<GetWorkoutTrainer/>}/>
                    <Route path='/workoutDetails' element={<GetWorkoutDetails/>}/>
                </Routes>
            </Router>

        </div>
    );
}

export default App;

