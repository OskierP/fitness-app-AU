import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { getTokenLogin, setToken, getUserID } from "./Service/API"
import { Button, OutlinedInput } from "@mui/material";
import FormControl from '@mui/material/FormControl';


export function LoginPage () {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();
    setToken("");

    async function handleSubmit(e){
        e.preventDefault();

        try{
            let a = await getTokenLogin(email, pass);
            let token = a.data.jwt;
            setToken(token);
            console.log(getUserID())
            navigate('/users');
        }catch(error){
            alert("Wrong Account or Password");
            setEmail("");
            setPass("");
        }

    }
    return (
        <>
        <form onSubmit={handleSubmit} >
           <OutlinedInput value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@mail.com" id="email" name="email"/>
            <br/>
            <OutlinedInput value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="****" id="password" name="password" />
            <br/>
            <Button type='submit' onSubmit={handleSubmit}>Log in</Button>
            {/* <button>Log in</button> */}
        </form>
    
        {/* <button onClick={()=> console.log(getTokenLogin(email,pass))}>Click me mate</button>
        <button onClick={()=> getPosition()}>Get position</button> */}
        </>
    )
}

