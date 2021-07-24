import { Professional } from './professional';

export class Movie
{
    // ATRIBUTOS
    public title:string;
    public releaseYear:number 
    public actors:Professional[];
    public nationality:string;
    public director:Professional[];
    public writer:Professional[];
    public language:string;
    public platform:string;
    public isMCU:boolean;
    public mainCharacterName:string;
    public producer:Professional[];
    public distributor:string
    public genre:string;

    // CONSTRUCTOR
    constructor( title:string, releaseYear:number,
                 nationality:string, genre:string)
    {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
        this.nationality = nationality;
        this.actors = [];
        this.director = [];
        this.writer = [];
        this.language = "eng";
        this.platform= "";
        this.isMCU= false;
        this.mainCharacterName= "";
        this.distributor="";

    }
    // GETTERS & SETTERS
    //GET------
    public getTitle(): string
    {
        return this.title;
    }
    public getReleaseYear(): number
    {
        return this.releaseYear;
    }
    public getActors(): Professional[]
    {
        return this.actors;
    }
    public getNationality(): string
    {
        return this.nationality;
    }
    public getDirector(): Professional[]
    {
        return this.writer;
    }
    public getWriter(): Professional[]
    {
        return this.writer;
    }
    public getLanguage(): string
    {
        return this.language;
    }
    public getPlataform(): string
    {
        return this.platform;
    }
    public getIsMCU(): boolean
    {
        return this.isMCU;
    }
    public getMainCharacterName(): string
    {
        return this.mainCharacterName;
    }
    public getProducer(): Professional[]
    {
        return this.producer;
    }
    public getDistribuidor(): string
    {
        return this.distributor;
    }
    public getGenre(): string
    {
        return this.genre;
    }
    // SeT-----
    public setTitle(title: string)
    {
        this.title = title ;
    }
    public setReleaseYear(releaseYear: number)
    {
        this.releaseYear = releaseYear;
    }
    public setActors(actors: Professional[])
    {
        this.actors = actors;
    }
    public setNationality(nationality: string)
    {
        this.nationality = nationality;
    }
    public setDirector(director: Professional [])
    {
        this.director = director;
    }
    public setWriter(writer: Professional [])
    {
        this.writer = writer;
    }
    public setLanguage(language : string)
    {
        this.language = language;
    }
    public setPlataform(platform : string)
    {
        this.platform = platform;
    }
    public setIsMCU( isMCU: boolean)
    {
        this.isMCU = isMCU;
    }
    public setMainCharacterName(mainCharacterName : string)
    {
        this.mainCharacterName = mainCharacterName;
    }
    public setProducer(producer : Professional[] )
    {
        this.producer = producer;
    }
    public setDistribuidor(distribuidor : string)
    {
        this.distributor = distribuidor;
    }
    public setGenre(genre : string)
    {
        this.genre = genre;
    }

    // METODOS
    public showMovie():string
    {
        let movieCard = "";
        let atributos = Object.getOwnPropertyNames(this);

        for(let item in atributos)
        {   
            let letraMay:string = (atributos[item].charAt(0)).toLocaleUpperCase();
            let restoAtr:string = (atributos[item]).substr(1);

            if(Array.isArray(this[atributos[item]]))
            {
                let arr:Professional = this[atributos[item]];
                movieCard += (letraMay + restoAtr) + ": " ;

                for(let a in arr)
                {
                    movieCard += arr[a].getName() + " \n";
                }
            }
            else
            {
                movieCard += (letraMay + restoAtr) + " : " 
                            + this[atributos[item]] + "\n";
            }
            
        }
        return movieCard;
    };    
}    