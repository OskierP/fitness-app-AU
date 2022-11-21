import axios from "axios";
let url = "https://fitnessbackend2022.azurewebsites.net/api/"

function getTokenLogin(email, pass){
let urlLog = url + "Users/login/"
let header = {'accept': 'text/plain', 'Content-Type': 'application/json'}
axios.post(urlLog,{"email": email,
"password": pass}, header ).then(function(res){console.log(res)})

}
export default getTokenLogin;
