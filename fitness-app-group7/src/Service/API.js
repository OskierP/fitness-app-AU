import axios from "axios";
import jwt_Decode from "jwt-decode";

let url = "https://fitnessbackend2022.azurewebsites.net/api/";
let base_token = "";

export function getToken() {
    return base_token;
}

export function setToken(token) {
    base_token = token;
}

export function getUserID(){
    var token = base_token;
    const identity = jwt_Decode(token);
    return identity.UserId;
}

export function getPosition(){
    var token = base_token;
    // console.log(token);
    const identity = jwt_Decode(token);
    return identity.Role;
}

export async function getTokenLogin(email, pass){
    let urlLog = url + "Users/login/"
    let header = {'accept': 'text/plain', 'Content-Type': 'application/json'}
    const data = await axios.post(urlLog,{"email": email, "password": pass}, header );   
    return data
}

export async function createUser(prop){
    let urlLog = url + "Users"
    console.log(prop)
    console.log(getToken())
    let header = {'accept': 'text/plain', 'Content-Type': 'application/json', 'Authorization': "Bearer " + getToken()}
    const data = await axios.post(urlLog, prop, {headers: header});   
    console.log(data)
    return data
}

export async function createWorkoutProgram(prop){
    let urlLog = url + "WorkoutPrograms"
    console.log(prop)
    console.log(getToken())
    let header = {'accept': 'text/plain', 'Content-Type': 'application/json', 'Authorization': "Bearer " + getToken()}
    const data = await axios.post(urlLog, prop, {headers: header});   
    console.log(data)
    return data
}

export async function createExercise(prop){
    let urlLog = url + "Exercises"
    console.log(prop)
    console.log(getToken())
    let header = {'accept': 'text/plain', 'Content-Type': 'application/json', 'Authorization': "Bearer " + getToken()}
    const data = await axios.post(urlLog, prop, {headers: header});   
    console.log(data)
    return data
}