import { useState } from "react";
import { getPosition, getUserID, createExercise} from "./Service/API";
import { NavigaionBar } from "./NavigationBar";
import { TextField, Button} from "@mui/material";

export function AddExercise(){
    /**
     *  We can combine the workoutProgramId with search
     *  and automatically fill it 
    **/

     const initialState = {
        name: "", 
        description: "",
        sets: 0,
        repetitions: 0,
        time: "",
        workoutProgramId: "",
        personalTrainerId: getUserID()
    }
    const [state, setState] = useState(initialState);

    let position = getPosition();

    if(position !== "PersonalTrainer"){
        return(
            
            <div className='App'>
                <NavigaionBar/>
                <h2> Permission Deny </h2>
                <h3> Only PersonalTrainer can add an exercise. </h3>
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
            await createExercise(state);
            setState(initialState);
            alert("Add Success!!");
        }
        catch (error) {
            alert("Create Fail!!");
            alert(error.message);
        }
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
                label="Exercise Name"
                name="name"
                type="text"
                value={state.name}
                onChange={handleInputChange} />
            <br /><br/>
                <TextField
                label="Exercise Description"
                name="description"
                type="text"
                value={state.description}
                onChange={handleInputChange} />
            <br /><br/>
                <TextField
                label="Sets"
                name="sets"
                type="number"
                value={state.sets}
                onChange={handleInputChange} />
            <br /><br/>
                <TextField
                label="Repetitions"
                name="repetitions"
                type="number"
                value={state.repetitions}
                onChange={handleInputChange} />
            <br /><br/>
                <TextField
                label="Time"
                name="time"
                type="text"
                value={state.time}
                onChange={handleInputChange} />
            <br /><br/>
                <TextField
                label="Workout Program ID"
                name="workoutProgramId"
                type="text"
                value={state.workoutProgramId}
                onChange={handleInputChange} />
            <br />
            <Button type="submit" value="Submit" onClick={handleSubmit}>Submit</Button>
            </form>
        </>
    );
}