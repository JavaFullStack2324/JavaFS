import {Movie, FavoriteItem } from "./interfaces";

export function GetAllMovies(): Movie[] {
    return [
    { title: 'A New Hope', director: 'George Lucas', yearReleased: 1977, streaming: true },
    { title: 'The Empire Strikes Back', director: 'Irvin Kershner', yearReleased: 1980, streaming: false },
    { title: 'Return of the Jedi', director: 'Richard Marquand', yearReleased: 1983, streaming: true },
    { title: 'The Phantom Menace', director: 'George Lucas', yearReleased: 1999, streaming: false },
    { title: 'Attack of the Clones', director: 'George Lucas', yearReleased: 2002, streaming: true },
    { title: 'Revenge of the Sith', director: 'George Lucas', yearReleased: 2005, streaming: true },
    { title: 'The Force Awakens', director: 'J.J. Abrams', yearReleased: 2015, streaming: false },
    { title: 'The Last Jedi', director: 'Rian Johnson', yearReleased: 2017, streaming: true },
    { title: 'The Rise of Skywalker', director: 'J.J. Abrams', yearReleased: 2019, streaming: true }
    ];
}


function GetReview(title:string): string| number{
    if(title == 'A New Hope'){
        return 'An instant classic!';
    }
    else{
        return Math.floor(Math.random()*10);
    }
}

//function PrintMovieInfo(title:string,yearReleased: number, ...cast:string[]){
export function PrintMovieInfo(movie: Movie){
    console.log(`Title:${movie.title}`);
    console.log(`Year Released:${movie.yearReleased}`)
    console.log(`Director:${movie.director}`)
    // console.log(`Title:${title}`);

    // if(yearReleased){
    //     console.log(`Year Released:${yearReleased}`)
    // }

    // for(const name of cast){
    //     console.log(`${name}`);
    // }
    
}
// PrintMovieInfo('A New Hope',1977,'Carrie','Mark','Harrison');

// let greeting: string = 'Hello Typescript!';

// console.log(greeting);

// let movieTitle: string = 'A New Hope';
let movieTitle: string = 'The Empire Strikes Back';

let scores: number[] = [70,125,85,110];
let highScores: number[];
highScores = scores.filter((element,index,array)=>{
	if(element>100){
		return true;
	}
});
console.log(highScores)
scores.filter

/* function LogMessage(message:string):void{
    console.log(message);
}
 */

const LogMessage = (message:string):void => {
    console.log(message);
}
LogMessage("hello world");

//movieTitle = 10;
//does not work

//movieTitle='The Empire Strikes Back'
//since declared let, not const

let movieReview: string| number = GetReview(movieTitle);

console.log(`Movie title: ${movieTitle}`);

if (typeof(movieReview) == 'string'){
    console.log(`Review:${movieReview}`);
}
else{
    console.log(`Rating:${movieReview}/10`);
}

//in ts declare one or more overload signatures then provide
// a single implementation that can handle all those cases

export function GetTitles(director: string): string[];
export function GetTitles(director: string, streaming: boolean): string[];

export function GetTitles(director: string, streaming?: boolean):string[]{
    const allMovies = GetAllMovies();
    const searchResults: string[] = [];

    if(streaming!==undefined){
        for(let movie of allMovies){
            if(movie.director==director && movie.streaming==streaming){
                searchResults.push(movie.title);
            }
        }
    } else{
        for(let movie of allMovies){
            if(movie.director==director){
                searchResults.push(movie.title)
            }
            
        }
    }
    return searchResults
}

export function Purge<T>(inventory: Array<T>): Array<T>{
    //implement some fancy business logic
    //return the purged items
    return inventory.splice(3,inventory.length);

}

function Greeter(target: Function, context?: any): void {
  target.prototype.greet = function (): void {
    console.log("Hello Jasdhir!");
  };
}

@Greeter
class User {}

let bytefer = new User();
(bytefer as any).greet();


// console.log(GetAllMovies());
GetAllMovies().forEach(element => {console.log(element)});
console.log(GetTitles('George Lucas'));

let books: FavoriteItem[]=[
    {title: "The Hobbit"},
    {title: "1984"},
    {title: "Dune"},
    {title: "Foundation"},
    {title: "Snow Crash"}
]

books.forEach(item=>console.log(item.title));

let purgedBooks = Purge<FavoriteItem>(books);
console.log("\nPurged Books:");
purgedBooks.forEach(item=>console.log(item.title));
console.log("\nremaining books:")
books.forEach(item=>console.log(item.title));