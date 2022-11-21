import { getPosition, getToken, createUser } from "./Service/API";
import { useState } from "react";
import { Link } from 'react-router-dom';

export function CreateUser(){
    let position = getPosition();
    let thing2create = "";

    const initialState = {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        AccountType: position
    }
    const [state, setState] = useState(initialState);

    if(position == "Manager"){
        thing2create = "Personal Trainer";
    }
    else if(position == "PersonalTrainer"){
        thing2create = "client"
    }
    else{
        thing2create = "nothing"
    }

    console.log(thing2create)
    if(thing2create == "nothing" ){
        // console.log(getToken())
        return(
            
            <div className='App'>
                <h2> Permission Deny </h2>
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
    }
    
    function handleSubmit(event) {
        //alert('Current state: ' + JSON.stringify(state));
        event.preventDefault();
        sendData();
    }

    return (
        <>
        <div>
            <Link to='/'> Home </Link>
        </div>

        <h2>Create New User</h2>
        You are creating {thing2create}
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              name="email"
              type="text"
              value={state.email}
              onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Password
            <input
              name="password"
              type="text"
              value={state.password}
              onChange={handleInputChange} />
          </label>
          <br />
          <label>
            First Name:
            <input
              name="firstName"
              type="text"
              value={state.firstName}
              onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Last Name:
            <input
              name="lastName"
              type="text"
              value={state.lastName}
              onChange={handleInputChange} />
          </label>
          <br />
          <input type="submit" value="Submit" onClick={handleSubmit} />
        </form>
        </>
      );
}

// export default CreateUser;