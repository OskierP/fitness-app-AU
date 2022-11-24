import { getPosition, getToken, createUser, getUserID } from "./Service/API";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { NavigaionBar } from "./NavigationBar";
import { OutlinedInput, Button, Input, TextField} from "@mui/material";

export function CreateUser(){
    let position = getPosition();
    let thing2create = "";

    
    if(position === "Manager"){
        thing2create = "PersonalTrainer";
    }
    else if(position === "PersonalTrainer"){
        thing2create = "Client"
    }
    else{
        thing2create = "nothing"
    }

    const initialState = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      personalTrainerId: getUserID(),
      AccountType: thing2create
    }
    const [state, setState] = useState(initialState);

    console.log(thing2create)
    if(thing2create === "nothing" ){
        // console.log(getToken())
        return(
            
            <div className='App'>
                <h2> Permission Deny </h2>
                <h3> Only Manager and PersonalTrainer can create users </h3>
                <Link to='/'> Home </Link>
            </div>
        );
    }


    function handleInputChange(event) {
        const name = event.target.name;
    
        setState(state => {
          return {
            ...state,
            [name]: event.target.value
          };
        });
    }

    async function sendData() {
        try {
            alert('Current state: ' + JSON.stringify(state));
            alert(getToken());
            await createUser(state);
            setState(initialState);
        }
        catch (error) {
          alert(error.message);
        }
        console.log(getToken());
    }
    
    function handleSubmit(event) {
        //alert('Current state: ' + JSON.stringify(state));
        event.preventDefault();
        sendData();
    }

    return (
        <>
        <div>
            <NavigaionBar/>
        </div>

        <h2>Create New User</h2>
        You are creating {thing2create}
        <br/><br/>
        <form onSubmit={handleSubmit}>
            <TextField
              label='Email'
              name="email"
              type="text"
              value={state.email}
              onChange={handleInputChange} />
          <br /><br/>
            <TextField
              name="password"
              type="text"
              label="Password"
              value={state.password}
              onChange={handleInputChange} />
          <br /><br/>
            <TextField
              label='First Name'
              name="firstName"
              type="text"
              value={state.firstName}
              onChange={handleInputChange} />
          <br /><br/>
            <TextField
              label="Last Name"
              name="lastName"
              type="text"
              value={state.lastName}
              onChange={handleInputChange} />
          <br />
          <Button type="submit" value="Submit" onClick={handleSubmit}>Submit</Button>
        </form>
        </>
      );
}

// export default CreateUser;