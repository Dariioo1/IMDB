import { Professional } from './professional';
import{Movie} from './movie'


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
}




