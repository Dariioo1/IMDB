import { Professional } from './professional';
import{Movie} from './movie'
import * as fs from 'fs';


export class Imdb
{
    // ATRIBUTOS
    public movies:Movie[];

    // CONSTRUCTOR
    constructor(arrMovies:Movie[])
    {
        this.movies = arrMovies;
    }

    // GETTERS & SETTERS
    // Get--------------
    public getMovies():Movie[]
    {
        return this.movies;
    }

    // Set---------------------------
    public setMovies(arrPelis:Movie[])
    {
        this.movies = arrPelis;
    }

    // METODOS
    public printImdb():string
    {
        let cardImdb:string = "\nIMDB:\n";
        let pelisImdb = this.movies;

        for(let mov in pelisImdb)
        {
            cardImdb += "\nPelicula " + (parseInt(mov)+1) + " ********\n";
            cardImdb += pelisImdb[mov].showMovie();
            cardImdb += "\n--------------------------------\n";
        }
        
        return cardImdb;
    }

    //imdbTojson()-> Devuelve un string con la filmoteca
    // en formato json.
    //Parámetros: objeto, funcion(replacer) y tabulados o espacios
    public imdbTojson():string
    {   
        let contenido:string = "";

        contenido += JSON.stringify(this, null, '\t');

        return contenido;
    }

    //guardarJson()-> Guarda el objeto en un fichero json
    public guardarJson():void
    {
        let contenido = this.imdbTojson();

        fs.writeFileSync( "imdbBBDD.json",
                            contenido,'utf-8' );
    }



}




