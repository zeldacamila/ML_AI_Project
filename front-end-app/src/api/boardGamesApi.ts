import axios from "axios";

//* Configurando axios para realizar peticiones.
const boardGamesApi = axios.create({
    //baseURL: "http://127.0.0.1:8000",
    baseURL: "http://15.228.163.179:2000",
});

export default boardGamesApi;