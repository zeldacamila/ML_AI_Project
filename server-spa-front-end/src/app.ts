import { envs } from "./config/envs";
import { ServerApp } from "./presentation/server";

//* Función auto-invocada.
(() => {

    main();

})();

function main() {

    //* Ejecutando servidor.
    const server = new ServerApp({
        port: envs.PORT,
        publicPath: 'public'
    });

    server.start();

}