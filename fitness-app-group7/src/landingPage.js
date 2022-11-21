import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {GetUsersPage} from './GetUserPage'
import {LoginPage} from './Login'
import {CreateUser} from './CreateUser';

function App(){
    return(

        <div className='App'>
            <Router>
                <Routes>
                    <Route path='/' element={<LoginPage/>}/>
                    <Route path='/users' element={<GetUsersPage/>}/>
                    <Route path='/create' element={<CreateUser/>}/>
                </Routes>



            </Router>
        </div>
    );
}

export default App;

