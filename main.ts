import { Professional } from './professional';
import {Movie} from './movie';
import {Imdb} from './imdb';

//TEST

// Creamos películas
let movie1: Movie =
        new Movie("Peter Rabbit", 2018, "EEUU", "Infantil");

let movie2: Movie =
        new Movie("Rocky", 2012, "EEUU", "Accion");

let movie3: Movie =
        new Movie("Lo que el viento se llevo",1939, "EEUU", "Clasico" );

let movie4: Movie =
        new Movie("Gladiator", 2000, "EEUU", "Accion");

let movie5: Movie =
        new Movie("The Avengers: Age of Ultron", 2012, "EEUU", "Comic");

let movie6: Movie =
        new Movie("The silence of the Lambs", 1991, "EEUU", "Thiller");
//-------------------------------------------------------------------------

//Asignamos valor al resto de atributos del objeto
movie1.setLanguage("English");
movie1.setPlataform("N/ID")
movie1.setIsMCU(false);
movie1.setMainCharacterName("Peter");
movie1.setDistribuidor("Sony Picture Releasing");
movie1.setActors ([
    new Professional ("Rose Bryne", 41 , "Mujer" , 53 , 168, "Castaño Oscuro" , 
    "Marron Cafe", "Blanca" , false , "Australiana" , 0 , ["Actor"], 
    " https://en.wikipedia.org/wiki/Rose_Byrne"),
    new Professional ("Sylvester Stallone" , 75 , "Hombre" , 102 , 177 , 
    "Marron Oscuro" , "Cafe" , "Blanca" , false, "Estadounidense", 3 , 
    ["Actor " , "Productor " , "Guinonista ", " Director"], 
    " https://en.wikipedia.org/wiki/Sylvester_Stallone")
] );

movie1.setDirector([new Professional ("Hitchcock", 41 , "Mujer" , 53 , 168, "Castaño Oscuro" , 
"Marron Cafe", "Blanca" , false , "Australiana" , 0 , ["Actor"], 
" https://en.wikipedia.org/wiki/Rose_Byrne")]

);
//-------------------------------------------------------------------------------


//Creo Objeto de clase Imdb
let cine:Imdb = new Imdb ([movie1,movie2]);

// Pruebo getMovie()
console.log("GetMovies:\n");
let films = cine.getMovies();
films.forEach( function(valor)
                {
                    console.log(valor.showMovie());
                });


//Probamos el setMovies
cine.setMovies([movie3,movie4]);
console.log("SetMovies:\n" + "-------------\n");
let films2 = cine.getMovies();
films2.forEach( function(valor)
                {
                    console.log(valor.showMovie());
                });


// Probamos el método printImdb
console.log("\n______________________________ \n");
let cine2:Imdb = new Imdb (
    [movie1,movie2,movie3,movie4,movie5,movie6]
    );

console.log(cine2.printImdb());
