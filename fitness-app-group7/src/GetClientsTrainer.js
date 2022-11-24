import React from "react";
import { getResponse } from "./Service/API";

export class GetClientsTrainer extends React.Component{

    state = {data:[]}

    componentDidMount(){
        getResponse('Users/Clients/').then(res=>{console.log(res);this.setState({data: res})})
    }

render(){
    return(
        <div>
        <div>{console.log(this.state.data[0])}</div>
            <table>
                <tr>
                    <td> First name </td>
                    <td> Last name</td>
                    <td> Email</td>
                </tr>
            {this.state.data.map(response=>
            <tr>
                <td>{response.firstName}</td>
                <td>{response.lastName}</td>
                <td>{response.email}</td>
                </tr>)}
            </table>
                

        </div>
    )
}
}
