import { useState } from "react";
import { getPosition, getUserID, createExercise, getToken } from "./Service/API";
import { NavigaionBar } from "./NavigationBar";

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
            alert('Current state: ' + JSON.stringify(state));
            alert(getToken());
            await createExercise(state);
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
            <label>
                Exercise Name:
                <input
                name="name"
                type="text"
                value={state.name}
                onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Exercise Description
                <input
                name="description"
                type="text"
                value={state.description}
                onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Sets:
                <input
                name="sets"
                type="number"
                value={state.sets}
                onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Repetitions:
                <input
                name="repetitions"
                type="number"
                value={state.repetitions}
                onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Time:
                <input
                name="time"
                type="text"
                value={state.time}
                onChange={handleInputChange} />
            </label>
            <br />
            <label>
                WorkoutProgramId:
                <input
                name="workoutProgramId"
                type="text"
                value={state.workoutProgramId}
                onChange={handleInputChange} />
            </label>
            <br />
            <input type="submit" value="Submit" onClick={handleSubmit} />
            </form>
        </>
    );
}