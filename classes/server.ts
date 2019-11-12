import express from 'express';
import { SERVER_PORT } from './../global/environment';


export default class Server{

    public app: express.Application;
    public port: number;


    constructor() {

        this.app = express();
        this.port = SERVER_PORT;
    }


    /* start( ){
       
        this.app.listen( this.port, () => {
            console.log(`Servidor corriendo en el puerto ${ this.port }`);
        });

    } */
    start( callback: any ) {

        this.app.listen( this.port, callback );

    }
}