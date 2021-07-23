import { Professional } from './professional';

let profesional1:Professional = new Professional ("Rose Bryne", 41 , "Mujer" , 53 , 168, "Castaño Oscuro" , "Marron Cafe", "Blanca" , false , "Australiana" , 0 , ["Actor"], " https://en.wikipedia.org/wiki/Rose_Byrne");
let profesional2:Professional = new Professional ("Sylvester Stallone" , 75 , "Hombre" , 102 , 177 , "Marron Oscuro" , "Cafe" , "Blanca" , false, "Estadounidense", 3 , ["Actor " , "Productor " , "Guinonista ", " Director"], " https://en.wikipedia.org/wiki/Sylvester_Stallone");
let profesional3:Professional = new Professional ("Vivien Leigh", 53 , "Mujer" , 55 , 160 , "Castaño" , "Azules", "Blanca", true , "Britanica", 2 , ["Actriz"] , " https://en.wikipedia.org/wiki/Vivien_Leigh");
let profesional4:Professional = new Professional ("Russell Crowe" , 57 , "Hombre" , 92 , 182 , "Marron Claro", "Azules", "Blanca", false, "Neozelandes", 1 , ["Actor"] , " https://en.wikipedia.org/wiki/Russell_Crowe");
let profesional5:Professional = new Professional ("Robert John Downey" , 51 , "Hombre" , 78 , 174 , "Marron Oscuro" , "Marron Oscuro" , "Blanco" , false , "Estadounidense" , 2 , ["Actor " , " Compositor" , " Director"] , " https://ast.wikipedia.org/wiki/Robert_Downey_Jr.")
let Profesional6:Professional = new Professional ("Anthony Hopkins" , 83 , "Hombre" , 70 , 174 , "Gris" , "Azules" , "Blanca" , false , "Estadounidense" , 2 , ["Actor"], " https://en.wikipedia.org/wiki/Anthony_Hopkins") 

profesional1.printProfessional();
profesional2.printProfessional();
profesional3.printProfessional();
profesional4.printProfessional();
profesional5.printProfessional();
Profesional6.printProfessional();