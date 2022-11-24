import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { getTokenLogin, getPosition, setToken, getUserID } from "./Service/API"


export function LoginPage () {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();
    setToken("");

    async function handleSubmit(e){
        e.preventDefault();
        let a = await getTokenLogin(email, pass);
        let token = a.data.jwt;
        setToken(token);
        console.log(getUserID())
        navigate('/trainerPage');

    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <label for="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@mail.com" id="email" name="email" />

            <label for="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="****" id="password" name="password" />
            <button>Log in</button>
        </form>
        <button onClick={()=> getTokenLogin(email,pass)}>Click me mate</button>
        <button onClick={()=> getPosition()}>Get position</button>
        </>
    )
}

// export default LoginPage;