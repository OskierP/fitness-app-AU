import React from "react";
import { getResponse } from "./Service/API";
import { setID } from "./Service/WorkoutID";
import { Link } from "react-router-dom";
import { NavigaionBar } from "./NavigationBar";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export class GetWorkoutTrainer extends React.Component{

    state = {data:[]};

    componentDidMount(){
        getResponse('WorkoutPrograms/trainer/').then(res=>{this.setState({data: res})})
    } 

render(){
    return(
        <>
        <div>
            <NavigaionBar />
        </div>
        <div>
                {/* <div>{console.log(this.state.data)}</div> */}
                <TableContainer component={Paper} className='workoutAll'>
                <Table sx={{maxWidth:1000}}>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Workout name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Show details</TableCell>
                        </TableRow>
                    </TableHead>
                    {this.state.data.map(response => <>
                        <TableBody>
                            <TableRow key={response.workoutProgramId}>
                                <TableCell>{response.workoutProgramId}</TableCell>
                                <TableCell>{response.name}</TableCell>
                                <TableCell>{response.description}</TableCell>
                                <TableCell><Link onClick={() => setID(response.workoutProgramId)} to='/workoutDetails'>details</Link></TableCell>
                            </TableRow>
                        </TableBody>
                    </>
                    )}
                </Table>
                </TableContainer>
            </div></>
    )
}
}
