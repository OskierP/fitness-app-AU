import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {GetUsersPage} from './GetUserPage'
import {LoginPage} from './Login'

function App(){
    return(

        <div className='App'>
            <Router>
                <Routes>
                    <Route path='/' element={<LoginPage/>}/>
                    <Route path='/users' element={<GetUsersPage/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;

