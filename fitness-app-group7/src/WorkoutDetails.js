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

            <TableContainer component={Paper}>
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
                    </Table>
                    <br />
                    <Table sx={{maxWidth:1000}}>
                        <TableHead>
                            <TableRow>EXERCISES</TableRow>
                        </TableHead>
                    </Table>


                    {this.state.exercises.map(element => <>
                        <Table sx={{maxWidth:1000}}>
                            <TableBody className="diff">
                                <TableRow>
                                    <TableCell>Workout name: {element.name}</TableCell>
                                    <TableCell>Description: {element.description}</TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell>Sets: {element.sets? element.sets : '--'} | Repetitons: {element.repetitions? element.repetitions : '--'}</TableCell>
                                    <TableCell>Time: {element.time? element.time : '--'}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        <br />
                    </>)}


                </TableContainer>
                </>
        )
    }
}
