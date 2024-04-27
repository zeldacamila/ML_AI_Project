import axios from "axios";

//* Configurando axios para realizar peticiones.
const boardGamesApi = axios.create({
    baseURL: "",
});

export default boardGamesApi;