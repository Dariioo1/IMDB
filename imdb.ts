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

    //leerJson-> devuelve un imdb
    //Leer el fichero imdbBBDD.son y almacenarlo en un objeto imdb
    public static leerJson():Imdb
    {   
        let filmoteca:Imdb = new Imdb([]);

        let archivo = fs.readFileSync("./imdbBBDD.json",
                                        'utf8');

        
        let mProfesional:Professional = new Professional("",0,"",0,0,"","","",false,"",0,[],"");
        let gProfesional:Professional[] = [];
        
        let arJson:any = JSON.parse(archivo);

        (arJson.movies).forEach(  
                    function (element:any, index:number) 
                    {
                        let moviePeli:Movie = new Movie("",0,"","");
                        //filmoteca.movies.push(Object.assign(moviePeli,element));
                        moviePeli.setTitle(element.title);

                        moviePeli.setReleaseYear(element.releaseYear);

                        let actors:any[] = element.actors;
                        moviePeli.setActors(Imdb.parseArrayProfesionales(actors));

                        moviePeli.setNationality(element.nationality);

                        let director:any[] = element.director;
                        moviePeli.setDirector(
                            Imdb.parseArrayProfesionales(director));
                        
                        let writer:any[] = element.writer;
                        moviePeli.setWriter(
                            Imdb.parseArrayProfesionales(writer));

                        moviePeli.setLanguage(element.language);

                        moviePeli.setPlataform(element.platform);

                        moviePeli.setIsMCU(element.isMCU);

                        moviePeli.setMainCharacterName(element.mainCharacterName);

                        let producer:any[] = element.producer;
                        moviePeli.setProducer(
                            Imdb.parseArrayProfesionales(producer));

                        moviePeli.setDistribuidor(element.distributor);
                        moviePeli.setGenre(element.genre);

                        filmoteca.movies.push(moviePeli);
                    });

        return filmoteca;
    }

    //parseArrayProfesionales-> Método privado para asignar los arrays de Professionals
    //y poder asignarlos al atributo correspondiente de la movie parte de imdb
    private static parseArrayProfesionales(prof:any[]):Professional[]
    {
        let grupoProf: Professional[] = [];

        for(let it in prof)
        {
            let mProf:Professional = 
            new Professional("",0,"",0,0,"","","",false,"",0,[],"");

            mProf.setName(prof[it].name);
            mProf.setAge(prof[it].age);
            mProf.setGenre(prof[it].genre);
            mProf.setWeight(prof[it].weight);
            mProf.setHeight(prof[it].height);
            mProf.setHairColor(prof[it].hairColor);
            mProf.setEyeColor(prof[it].eyeColor);
            mProf.setRace(prof[it].race);
            mProf.setIsRetired(prof[it].isRetired);
            mProf.setNationality(prof[it].nationality);
            mProf.setOscarsNumber(prof[it].oscarsNumber);
            mProf.setProfession(prof[it].profession);
            mProf.setBio(prof[it].bio);

            grupoProf.push(mProf);
        }

        return grupoProf;
    }

    // escribirEnFicheroJSON -> parametro de entrada el nombre de un fichero
    // y genera ese archivo en formato .json
    public escribirEnFicheroJSON(nombreFichero:string):void 
    {
        let contenido = this.imdbTojson();

        fs.writeFileSync( nombreFichero+ ".json",
                            contenido,'utf-8' ); 
    }

    // obtenerInstanciaIMDB-> devuelve un objeto de la clase IMDB
    // creado a partir de un fichero
    public static obtenerInstanciaIMDB(nombreFichero:string):Imdb
    {

        let filmoteca:Imdb = new Imdb([]);

        let archivo:string = fs.readFileSync(nombreFichero+".json",'utf8');

        
        let mProfesional:Professional = new Professional("",0,"",0,0,"","","",false,"",0,[],"");
        let gProfesional:Professional[] = [];
        
        let arJson:any = JSON.parse(archivo);

        (arJson.movies).forEach(  
                    function (element:any, index:number) 
                    {
                        let moviePeli:Movie = new Movie("",0,"","");
                        //filmoteca.movies.push(Object.assign(moviePeli,element));
                        moviePeli.setTitle(element.title);

                        moviePeli.setReleaseYear(element.releaseYear);

                        let actors:any[] = element.actors;
                        moviePeli.setActors(Imdb.parseArrayProfesionales(actors));

                        moviePeli.setNationality(element.nationality);

                        let director:any[] = element.director;
                        moviePeli.setDirector(
                            Imdb.parseArrayProfesionales(director));
                        
                        let writer:any[] = element.writer;
                        moviePeli.setWriter(
                            Imdb.parseArrayProfesionales(writer));

                        moviePeli.setLanguage(element.language);

                        moviePeli.setPlataform(element.platform);

                        moviePeli.setIsMCU(element.isMCU);

                        moviePeli.setMainCharacterName(element.mainCharacterName);

                        let producer:any[] = element.producer;
                        moviePeli.setProducer(
                            Imdb.parseArrayProfesionales(producer));

                        moviePeli.setDistribuidor(element.distributor);
                        moviePeli.setGenre(element.genre);

                        filmoteca.movies.push(moviePeli);
                    });
                    
        return filmoteca;
    }
}











