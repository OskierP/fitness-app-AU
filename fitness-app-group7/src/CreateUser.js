import { getPosition } from "./Service/API";
import { useState } from "react";

function CreateUser(){
    let position = getPosition();
    let thing2create = "";
    if(position == "Manager"){
        thing2create = "Personal Trainer";
    }
    else if(position == "PersonalTrainer"){
        thing2create = "client"
    }

    const intialState = {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
    }

    const [state, setState] = useState(initialState);

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
          // await postData('students', state);
          alert('Current state: ' + JSON.stringify(state));
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
            First Name:
            <input
              name="lastName"
              type="text"
              value={state.lastName}
              onChange={handleInputChange} />
          </label>
          <br />
          <input type="reset" value="Cancel" onClick={handleReset} /> <input type="submit" value="Submit" />
        </form>
        </>
      );
}

export default CreateUser;