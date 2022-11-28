import React from "react";
import { getResponse } from "./Service/API";
import { NavigaionBar } from "./NavigationBar";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export class GetClientWorkout extends React.Component{

    state = {data:[]}

    componentDidMount(){
        getResponse('/WorkoutPrograms').then(res=>{console.log(res);this.setState({data: res})})
    }

render(){
    return(
        <>
        <div>
            <NavigaionBar />
        </div>
        <TableContainer component={Paper}  className="centerTable">
                <Table sx={{maxWidth:1000}}>
                    <TableHead>
                    <TableRow>
                        <TableCell>Workout Program</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Exercises</TableCell>
                    </TableRow>
                    </TableHead>
                    {this.state.data.map(response =>
                    <TableBody>
                    <TableRow key={response.workoutProgramId}>
                        <TableCell>{response.workoutProgramId}</TableCell>
                        <TableCell>{response.name}</TableCell>
                        <TableCell>{response.description}</TableCell>
                        <TableCell>{response.exercises}</TableCell>
                    </TableRow>
                    </TableBody>)}
                </Table>


            </TableContainer></>
    )
}
}