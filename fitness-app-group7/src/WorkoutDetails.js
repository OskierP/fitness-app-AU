import React from "react";
import { getResponse } from "./Service/API";
import { getID } from "./Service/WorkoutID";

export class GetWorkoutDetails extends React.Component{

    state = {obj:{}, exercises:[]}

    
    componentDidMount(){
  
        getResponse('WorkoutPrograms/'+getID()).then(res=>{console.log(res);this.setState({obj:res, exercises: res.exercises})})
    }

    render(){

        return(
            <div>
            <table>
                <thead>
                    <tr>
                    <td>Workout ID</td>
                    <td>Workout name</td>
                    <td>Description</td>
                    <td>Personal Trainer ID</td>
                    <td>Client ID</td>
                    </tr>
                </thead >
                <tbody>
                    <tr key={this.state.obj.workoutProgramId}>
                        <td>{this.state.obj.workoutProgramId}</td>
                        <td>{this.state.obj.name}</td>
                        <td>{this.state.obj.description}</td>
                        <td>{this.state.obj.personalTrainerId}</td>
                        <td>{this.state.obj.clientId}</td>
                    </tr>
                </tbody>
                </table>
                <br/>
                <table>
                <thead>
                    <tr>EXERCISES</tr>
                </thead>
                </table>
                

                    {this.state.exercises.map(element=>
                        <>
                        <table>
                        <tbody className="diff">
                        <tr>
                            <td>Workout name: {element.name}</td>
                            <td>Description: {element.description}</td>
                        </tr>
                    
                        <tr>
                            <td>Sets: {element.sets} | Repetitons: {element.repetitions}</td>
                            <td>Time: {element.time}</td>
                        </tr>
                        </tbody>
                        </table>
                        <br/>
                        </>)}

           
            </div>
        )
    }
}
