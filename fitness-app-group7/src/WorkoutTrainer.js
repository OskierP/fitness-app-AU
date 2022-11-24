import React from "react";
import { getResponse } from "./Service/API";
import { getID, setID } from "./Service/WorkoutID";
import { useNavigate } from "react-router-dom";

export class GetWorkoutTrainer extends React.Component{

    state = {data:[]};
    // navigate = useNavigate();

    componentDidMount(){
        getResponse('WorkoutPrograms/trainer/').then(res=>{console.log(res);this.setState({data: res})})
    }

    showDetails(id){
        
        setID(id);
        // navigate
        // useNavigate('/workoutDetails')
        navigate('/workoutDetails')
    }

render(){
    return(
        <div>
        {/* <div>{console.log(this.state.data[0])}</div> */}
        <table>
            <thead>
                <tr>
                <td>ID</td>
                <td>Workout name</td>
                <td>Description</td>
                <td>Show details</td>
                </tr>
            </thead >
                {this.state.data.map(response=>
                <>
                <tbody>
                    <tr key={response.workoutProgramId}>
                <td>{response.workoutProgramId}</td>
                <td>{response.name}</td>
                <td>{response.description}</td>
                <td><button onClick={()=>this.showDetails(response.workoutProgramId)}>deatils</button></td>
                </tr>
                </tbody>
                </>
                )}
        </table>
        </div>
    )
}
}
