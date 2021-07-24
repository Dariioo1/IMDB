import { Professional } from './professional';
import { Movie } from './movie';
import {Imdb} from './imdb';



//TEST

let movie1: Movie = 
        new Movie("Peter Rabbit", 2018, "EEUU", "Infantil");

let movie2: Movie= 
        new Movie("Rocky", 2012, "EEUU", "Accion");

let movie3: Movie= 
        new Movie("Lo que el viento se llevo",1939, "EEUU", "Clasico" );

let movie4: Movie= 
        new Movie("Gladiator", 2000, "EEUU", "Accion");

let movie5: Movie= 
        new Movie("The Avengers: Age of Ultron", 2012, "EEUU", "Comic");

let movie6: Movie= 
        new Movie("The silence of the Lambs", 1991, "EEUU", "Thiller");

//Método que muestre todos los atributos de las peliculas

//Pelicula1
movie1.setLanguage("English");

movie1.setPlataform("N/ID");

movie1.setIsMCU(false);

movie1.setMainCharacterName("Peter");

movie1.setDistribuidor("Sony Picture Releasing");

movie1.setActors([
    new Professional ("Rose Bryne", 41 , "Mujer" , 53 , 168, 
        "Castaño Oscuro" , "Marron Cafe", "Blanca" , false , 
        "Australiana" , 0 , ["Actor"], 
        " https://en.wikipedia.org/wiki/Rose_Byrne"),

    new Professional ("Sylvester Stallone" , 75 , "Hombre" , 102 , 177 , 
        "Marron Oscuro" ,"Cafe" , "Blanca" , false, 
        "Estadounidense", 3 , ["Actor " , "Productor " , "Guinonista ", " Director"], 
        " https://en.wikipedia.org/wiki/Sylvester_Stallone")
        ]);

movie1.setDirector([
    new Professional ("Will Gluck", 41, "hombre", 91, 185, 
        "Rubio", "verdes", "blanca", false, 
        "Estadounidense", 0, ["Director" , "Guionista"], 
        "https://es.wikipedia.org/wiki/Will_Gluck")
        ]);

movie1.setWriter([
    new Professional ("Rober Lieber", 45,"Hombre", 90, 170, 
        "Negro", "Negro", "Blanca", false, 
        "Estadounidense",0, ["Ecritor", "Productor"], 
        "https://www.imdb.com/name/nm1464577/")
        ]);

movie1.setProducer([
    new Professional ("Will Gluck", 41, "hombre", 91, 185, 
        "Rubio", "verdes", "blanca", false, 
        "Estadounidense", 0, ["Director" , "Guionista"], 
        "https://es.wikipedia.org/wiki/Will_Gluck")
        ]);

//Pelicula2
movie2.setLanguage("English");

movie2.setPlataform("N/ID");

movie2.setIsMCU(false);

movie2.setMainCharacterName("Rocky");

movie2.setDistribuidor("United Artists");

movie2.setActors([
    new Professional ("Sylvester Stallone" , 75 , "Hombre" , 102 , 177 , 
        "Marron Oscuro" ,"Cafe" , "Blanca" , false, 
        "Estadounidense", 3 , ["Actor " , "Productor " , "Guinonista ", " Director"], 
        " https://en.wikipedia.org/wiki/Sylvester_Stallone")
        ]);

movie2.setDirector([
    new Professional("John G.Advilse", 81, "Hombre", 70, 165, 
        "Gris", "Negro", "Blanca", true, 
        "Estadounidense", 1, ["Director"], 
        "https://es.wikipedia.org/wiki/John_G._Avildsen")

        ]);

movie2.setWriter([
    new Professional ("Sylvester Stallone" , 75 , "Hombre" , 102 , 177 , 
        "Marron Oscuro" ,"Cafe" , "Blanca" , false, 
        "Estadounidense", 3 , ["Actor " , "Productor " , "Guinonista ", " Director"],
        " https://en.wikipedia.org/wiki/Sylvester_Stallone")
        ]);

movie2.setProducer([
    new Professional("Rober Chartof", 87, "Hombre", 80, 176, 
        "Negro", "Negro", " Blanca", true , 
        "Estadounidense", 3, ["Productor"], 
        "https://en.wikipedia.org/wiki/Robert_Chartoff")
        ]);

//Pelicula3
movie3.setLanguage("English");

movie3.setPlataform("N/ID");

movie3.setIsMCU(false);

movie3.setMainCharacterName("Scarlatta");

movie3.setDistribuidor("Loew's Inc");

movie3.setActors([
    new Professional ("Vivien Leigh", 53 , "Mujer" , 55 , 160 , 
        "Castaño" , "Azules", "Blanca", true , 
        "Britanica", 2 , ["Actriz"] , 
        " https://en.wikipedia.org/wiki/Vivien_Leigh")
        ]);

movie3.setDirector([
    new Professional("Victor Fleming", 72, "Hombre", 70, 185 , 
        "Rubio", "Azules", "Blanca", true, 
        "Estadounidense", 1, ["Director"], 
        "https://es.wikipedia.org/wiki/Victor_Fleming")
        ]);

movie3.setWriter([
    new Professional("Ben Hecht", 127, "Hombre", 75, 170, 
        "Negro", "Marrones", "Blanca", true, 
        "Estadounidense", 0 , ["Escritor", "Director"], 
        "https://es.wikipedia.org/wiki/Ben_Hecht")
        ]);

movie3.setProducer([
    new Professional("David O. Selznick", 56, "Hombre",85, 180, 
        "Negro","Azules","Blanca", true, 
        "Estadounidense", 2, ["Productor"],
        "https://es.wikipedia.org/wiki/David_O._Selznick")
        ]);

//Pelicula4
movie4.setLanguage("English");

movie4.setPlataform("N/ID");

movie4.setIsMCU(false);

movie4.setMainCharacterName("Maximo Decimo Meridio");

movie4.setDistribuidor("Dreamworks, Universal Pictures");

movie4.setActors([
    new Professional("Russell Crowe" , 57 , "Hombre" , 92 , 182 ,
        "Marron Claro", "Azules", "Blanca", false, 
        "Neozelandes", 1 , ["Actor"] , 
        "https://en.wikipedia.org/wiki/Russell_Crowe")   
        ]);

movie4.setDirector([
    new Professional("Ridley Scott", 84, "Hombre", 95 , 185, 
        "Castaño", "Azules", "Blanca",false, 
        "Britanico", 1, ["Director", "Productor", "Guionista"], 
        "https://es.wikipedia.org/wiki/Ridley_Scott")
        ]);

movie4.setWriter([
    new Professional("William Nicholson", 73, "Hombre",90, 175, 
        "Castaño", "Marrones","Blanca", false, 
        "Britanico", 0, ["Escritor"], 
        "https://es.wikipedia.org/wiki/William_Nicholson_(escritor)")
        ]);

movie4.setProducer([
    new Professional("Douglas Wick", 67, "Hombre", 85, 195,
        "Rubio",  "Verdes", "Blanca",false, 
        "Estadounidense", 0, ["Productor"], 
        "https://en.wikipedia.org/wiki/Douglas_Wick")
        ]);

//Pelicula5
movie5.setLanguage("English");

movie5.setPlataform("N/ID");

movie5.setIsMCU(true);

movie5.setMainCharacterName("The Avengers");

movie5.setDistribuidor("Marvel studios");

movie5.setActors([
    new Professional("Robert John Downey" , 51 , "Hombre" , 78 , 174 , 
        "Marron Oscuro" , "Marron Oscuro" ,"Blanco" , false , 
        "Estadounidense" , 2 , ["Actor " , " Compositor" , " Director"] , 
        " https://ast.wikipedia.org/wiki/Robert_Downey_Jr.")
        ]);

movie5.setDirector([
    new Professional("Joss Whedon", 57, "Hombre", 80, 178, 
        "Red", "Gris", "Blanco", false, 
        "Estadounidense", 1, ["Director"], 
        "https://es.wikipedia.org/wiki/Joss_Whedon")
        ]);

movie5.setWriter([
    new Professional("Stan Lee", 96, "Hombre", 70, 180, 
        "Gris", "Azules", "Blanco", true, 
        "Estadounidense", 1, ["Escritor"], 
        "https://es.wikipedia.org/wiki/Stan_Lee")
        ]);

movie5.setProducer([
    new Professional("Kevin Feige", 48, "Hombre", 80, 182, 
        "Marron Oscuro", "Marrones", "Blanca", false, 
        "Estadounidense", 1, ["Productor"], 
        "https://es.wikipedia.org/wiki/Kevin_Feige")
        ]);

//Pelicula6
movie6.setLanguage("English");

movie6.setPlataform("N/ID");

movie6.setIsMCU(false);

movie6.setMainCharacterName("Hannibal Lecter");

movie6.setDistribuidor("Orion Pictures");

movie6.setActors([
new Professional ("Anthony Hopkins" , 83 , "Hombre" , 70 , 174 , 
        "Gris" , "Azules" , "Blanca" , false ,
        "Estadounidense" , 2 , ["Actor"], 
        "https://en.wikipedia.org/wiki/Anthony_Hopkins")
        ]);

movie6.setDirector([
    new Professional ( "Jonathan Demme", 77, "Hombre", 75, 177, 
        "Negro", "Marron", "Blanca", false,
        "Estadounidense", 1 , ["Director"],
        "https://es.wikipedia.org/wiki/Jonathan_Demme" )
        ]);

movie6.setWriter([
    new Professional("Ted Tally", 69, "Hombre", 86, 174, 
    "Marron oscuros", "Negro", "Blanca", false, 
    "Estadounidense", 1, ["Escritor"], 
    "https://en.wikipedia.org/wiki/Ted_Tally")
]);

movie6.setProducer([
    new Professional("Edward Saxon", 65, "Hombre", 64 , 174, 
        "Negro", "Blue", "Blanca", false, 
        "Estadounidense", 1, ["Productor"], 
        "https://en.wikipedia.org/wiki/Edward_Saxon")
        ]);

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

//PRUEBAS CLASE IMDB--------------------------------------------------------------
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

//Probamos el método imdbTojson
let archivo:string = cine2.imdbTojson();

console.log("\n-------------------------------------\n");

console.log("Filmoteca en formato texto JSON:\n");

console.log(archivo);


// Probamos guardarjson
console.log("\n-------------------------------------\n");
cine2.guardarJson();


