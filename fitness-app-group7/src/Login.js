import React, {useState} from "react";
import getTokenLogin from "./Service/API"

function Login (props) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit =(e) =>{
        e.preventDefault();
        console.log(email);

    }
    return (
        <><form onSubmit={handleSubmit}>
            <label for="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@mail.com" id="email" name="email" />

            <label for="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="****" id="password" name="password" />
            <button>Log in</button>
        </form>
        <button onClick={() => props.onFormSwitch('register')}>Register</button>
        <button onClick={()=>getTokenLogin(email,pass)}>Click me mate</button>
        </>
    )
}

export default Login;