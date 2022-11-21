import React, {useState} from "react";


export const Register = (props) =>{
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit =(e) =>{
        e.preventDefault();
        console.log(email);

    }

    return (
        <><form onSubmit={handleSubmit}>

            <label htmlFor="name">Full name</label>
            <input value={name} onChange={(e)=> setName(e.target.value)} type='name' placeholder="name" id="name"></input>
            <label for="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@mail.com" id="email" name="email" />

            <label for="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="****" id="password" name="password" />
            <button>Log in</button>
        </form>
        <button onClick={() => props.onFormSwitch('login')}>have an account? Log in</button>
        </>
    )
}