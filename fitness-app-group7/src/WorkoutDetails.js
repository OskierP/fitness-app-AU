import React from "react";
import { getResponse } from "./Service/API";
import { getID } from "./Service/WorkoutID";

export class GetWorkoutDetails extends React.Component{

    state = {data:[]}
    

    componentDidMount(){
  
        getResponse('WorkoutPrograms/'+getID().toString).then(res=>{console.log(res);this.setState({data: res})})
    }

render(){
    return(
        <div>
        <div>{console.log(this.state.data)}</div>
        {/* <table>
            <tr>
                <td>ID</td>
                <td>Workout name</td>
                <td>Description</td>
                <td>Show details</td>
            </tr>
                {this.state.data.map(response=>
                <>
                <tr>
                <td>{response.workoutProgramId}</td>
                <td>{response.name}</td>
                <td>{response.description}</td>
                <td><button onClick={()=>this.showDetails(response.workoutProgramId)}>deatils</button></td>
                </tr>
                </>
                )}
        </table> */}
        </div>
    )
}
}
