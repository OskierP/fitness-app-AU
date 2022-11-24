import React from "react";
import { getResponse } from "./Service/API";
import { getID, setID } from "./Service/WorkoutID";
import { Link, useNavigate } from "react-router-dom";

export class GetWorkoutTrainer extends React.Component{

    state = {data:[]};

    componentDidMount(){
        getResponse('WorkoutPrograms/trainer/').then(res=>{console.log('cc: '+res);this.setState({data: res})})
    } 

render(){
    return(
        <div>
        {/* <div>{console.log(this.state.data)}</div> */}
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
                <td><Link onClick={()=>setID(response.workoutProgramId)} to='/workoutDetails'>details</Link></td>
                </tr>
                </tbody>
                </>
                )}
        </table>
        </div>
    )
}
}
