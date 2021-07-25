export class Professional
{
    //ATRIBUTOS
    public name:string;
    public age:number;
    public genre:string;
    public weight:number;
    public height:number;
    public hairColor:string;
    public eyeColor:string;
    public race:string;
    public isRetired:boolean;
    public nationality:string;
    public oscarsNumber:number;
    public profession:string[]
    public bio:string

    //CONSTRUCTOR

    constructor(
        name:string, 
        age:number,
        genre:string, 
        weight:number, 
        height:number, 
        hairColor:string, 
        eyeColor:string, 
        race:string, 
        isRetired:boolean, 
        nationality:string, 
        oscarsNumber:number, 
        profession:string[], 
        bio:string )
    {
        this.name=name;
        this.age=age;
        this.genre=genre;
        this.weight=weight;
        this.height=height;
        this.hairColor=hairColor;
        this.eyeColor=eyeColor;
        this.race=race;
        this.isRetired=isRetired;
        this.nationality=nationality;
        this.oscarsNumber=oscarsNumber;
        this.profession=profession;
        this.bio=bio;
    }

    //GETTERS & SETTERS
    //GEt---------------
    public getName():string
    {
        return this.name;
    }

    public getAge():number{
        return this.age;
    }

    public getGenre():string
    {
        return this.genre
    }

    public getWeight():number
    {
        return this.weight;
    }

    public getHeight():number
    {
        return this.height
    }

    public getHairColor():string
    {
        return this.hairColor;
    }

    public getEyeColor():string
    {
        return this.eyeColor;
    }

    public getRace():string
    {
        return this.race;
    }

    public getIsRetired():boolean
    {
        return this.isRetired;
    }

    public getNationality():string
    {
        return this.nationality;
    }

    public getOscarsNumber():number
    {
        return this.oscarsNumber;
    }

    public getProfession():string[]
    {
        return this.profession;
    }

    public getBio():string
    {
        return this.bio;
    }

    //Set----------------------
    public setName(name:string)
    {
        this.name=name;
    }

    public setAge(age:number)
    {
        this.age=age;
    }

    public setGenre(genre:string)
    {
        this.genre=genre;
    }

    public setWeight(weight:number)
    {
        this.weight=weight;
    }

    public setHeight(height:number)
    {
        this.height=height;
    }

    public setHairColor(hairColor:string)
    {
        this.hairColor=hairColor;
    }

    public setEyeColor(eyeColor:string)
    {
        this.eyeColor=eyeColor;
    }

    public setRace(race:string)
    {
        this.race=race;
    }

    public setIsRetired(isRetired:boolean)
    {
        this.isRetired=isRetired;
    }

    public setNationality(nationality:string)
    {
        this.nationality=nationality;
    }

    public setOscarsNumber(oscarsNumber:number)
    {
        this.oscarsNumber=oscarsNumber;
    }

    public setProfession(profession:string[])
    {
        this.profession=profession;
    }

    public setBio(bio:string)
    {
        this.bio=bio;
    }

    public printProfessional()
    {
        console.log("The characteristics of Professional " + this.name + " are");
        console.log("-Name: " + this.name);
        console.log("-Age: " + this.age);
        console.log("-Genre: " + this.genre);
        console.log("-Weight: " + this.weight);
        console.log("-Height: " + this.height);
        console.log("-Hair Color: " + this.hairColor);
        console.log("-Eye Color: " + this.eyeColor);
        console.log("-Race: " + this.race);
        console.log("-Is Retired ?: " + this.isRetired);
        console.log("-Nationality: " + this.nationality);
        console.log("-Oscars Number: " + this.oscarsNumber);
        console.log("-Profession: " + this.profession );
        console.log("-Biografia Completa:" + this.bio + "\n");        
    }

}