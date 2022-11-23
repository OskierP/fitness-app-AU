import { useState } from "react";

export function CreateWorkoutProgram(){
    const initialState = {
        name: "",
        description: "",
        personalTrainerId: getUserID(),
        clientId: 0
    }
    const [state, setState] = useState(initialState);

    let position = getPosition();

    if(position !== "PersonalTrainer"){
        return(
            
            <div className='App'>
                <h2> Permission Deny </h2>
                <Link to='/'> Home </Link>
            </div>
        );
    }

}