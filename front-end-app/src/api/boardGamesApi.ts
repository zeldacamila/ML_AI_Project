import axios from "axios";

//* Configurando axios para realizar peticiones.
const boardGamesApi = axios.create({
    baseURL: "http://15.228.156.203:2000",
});

export default boardGamesApi;