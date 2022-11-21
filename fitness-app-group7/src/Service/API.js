import axios from "axios";
import jwt_Decode from "jwt-decode";

let url = "https://fitnessbackend2022.azurewebsites.net/api/";
let base_token = "";

export function getToken() {
    return localStorage.getItem("token");
}

export function setToken(token) {
    base_token = token;
}

export function getPosition(){
    var token = base_token;
    console.log(token);
    const position = jwt_Decode(token);
    return position.Role
}

export async function getTokenLogin(email, pass){
    let urlLog = url + "Users/login/"
    let header = {'accept': 'text/plain', 'Content-Type': 'application/json'}
    const data = await axios.post(urlLog,{"email": email, "password": pass}, header );
    
    return data
}

