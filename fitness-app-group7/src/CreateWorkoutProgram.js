import { useState } from "react";
import { getPosition, getToken, createWorkoutProgram, getUserID } from "./Service/API";
import { NavigaionBar } from "./NavigationBar";
import { Button, TextField } from "@mui/material";

export function CreateWorkoutProgram(){

    /**
     *  We can combine the clientID with search
     *  and automatically fill it 
    **/

    const initialState = {
        name: "",
        description: "",
        exercises: [],
        personalTrainerId: getUserID(),
        clientId: 0
    }
    const [state, setState] = useState(initialState);

    let position = getPosition();

    if(position !== "PersonalTrainer"){
        return(
            
            <div className='App'>
                <NavigaionBar/>
                <h2> Permission Deny </h2>
                <h3> Only PersonalTrainer can create a workout program. </h3>
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
            await createWorkoutProgram(state);
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

    return(
        <>
            <NavigaionBar/>
            <h2>Create New Workout Program</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                label="Workout Name"
                name="name"
                type="text"
                value={state.name}
                onChange={handleInputChange} />
            <br /><br/>
                <TextField
                label="Workout Description"
                name="description"
                type="text"
                value={state.description}
                onChange={handleInputChange} />
            <br /><br/>
                <TextField
                label="Client ID"
                name="clientId"
                type="number"
                value={state.clientId}
                onChange={handleInputChange} />
            <br />
            <Button type="submit" value="Submit" onClick={handleSubmit}>Submit</Button>
            </form>
        </>
    );

}