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


export class GetClientsTrainer extends React.Component{

    state = {data:[]}

    componentDidMount(){
        getResponse('Users/Clients/').then(res=>{console.log(res);this.setState({data: res})})
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
                        <TableCell>Client ID</TableCell>
                        <TableCell> First name </TableCell>
                        <TableCell> Last name</TableCell>
                        <TableCell> Email</TableCell>
                    </TableRow>
                    </TableHead>
                    {this.state.data.map(response =>
                    <TableBody>
                    <TableRow key={response.userId}>
                        <TableCell>{response.userId}</TableCell>
                        <TableCell>{response.firstName}</TableCell>
                        <TableCell>{response.lastName}</TableCell>
                        <TableCell>{response.email}</TableCell>
                    </TableRow>
                    </TableBody>)}
                </Table>


            </TableContainer></>
    )
}
}
