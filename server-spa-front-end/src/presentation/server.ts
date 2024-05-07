import express from "express";
import path from "path";
import cors from "cors";

interface ServerAppOptions {
    port: number;
    publicPath: string;
}

export class ServerApp {

    public readonly app = express();
    private readonly port: number;
    private readonly publicPath: string;

    constructor( options: ServerAppOptions ){
        const { port, publicPath } = options;
        this.port = port;
        this.publicPath = publicPath;
    };

    async start() {

        //* Middlewares.
        this.app.use( cors() );

        //* Public folder for SPA.
        this.app.use( express.static( this.publicPath ) );

        //* EndPoint para envíar SPA.
        this.app.get('*', ( req, res ) => {
            const indexPath = path.join( __dirname + `../../../${ this.publicPath }/index.html` );
            res.sendFile( indexPath );
        });

        //* Mensaje del servidor.
        this.app.listen(this.port, () => {
            console.log(`Server running on port: ${ this.port }`);
        });

    }

}