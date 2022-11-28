import React from "react";
import { getResponse } from "./Service/API";
import { getID } from "./Service/WorkoutID";
import { NavigaionBar } from "./NavigationBar";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export class GetWorkoutDetails extends React.Component{

    state = {obj:{}, exercises:[]}

    
    componentDidMount(){
  
        getResponse('WorkoutPrograms/'+getID()).then(res=>{console.log(res);this.setState({obj:res, exercises: res.exercises})})
    }

    render(){

        return(
            <>
            <div>
                <NavigaionBar />
            </div>

            <div >
            <TableContainer component={Paper} className="centerTable" >
                    <Table sx={{maxWidth:1000}}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Workout ID</TableCell>
                                <TableCell>Workout name</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Personal Trainer ID</TableCell>
                                <TableCell>Client ID</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow key={this.state.obj.workoutProgramId}>
                                <TableCell>{this.state.obj.workoutProgramId}</TableCell>
                                <TableCell>{this.state.obj.name}</TableCell>
                                <TableCell>{this.state.obj.description}</TableCell>
                                <TableCell>{this.state.obj.personalTrainerId}</TableCell>
                                <TableCell>{this.state.obj.clientId}</TableCell>
                            </TableRow>
                        </TableBody>
                    {/* </Table> */}
                    <br /> 
                            <TableRow>EXERCISES</TableRow>

                    {this.state.exercises.map(element => <>
                            <TableBody className="diff">
                                <TableRow>
                                    <TableCell><b><i>Workout name:</i></b> {element.name}</TableCell>
                                    <TableCell><b><i>Description: </i></b> {element.description}</TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell><b><i>Sets / Repetitons: </i></b> {element.sets? element.sets : '--'} / {element.repetitions? element.repetitions : '--'}</TableCell>
                                    <TableCell><b><i>Time: </i></b> {element.time? element.time : '--'}</TableCell>
                                </TableRow>
                            </TableBody>
                        <br />
                    </>)} 

                </Table>
                </TableContainer>
                </div>
                </>
        )
    }
}
