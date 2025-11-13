"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Purge = exports.GetTitles = exports.PrintMovieInfo = exports.GetAllMovies = void 0;
function GetAllMovies() {
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
exports.GetAllMovies = GetAllMovies;
function GetReview(title) {
    if (title == 'A New Hope') {
        return 'An instant classic!';
    }
    else {
        return Math.floor(Math.random() * 10);
    }
}
//function PrintMovieInfo(title:string,yearReleased: number, ...cast:string[]){
function PrintMovieInfo(movie) {
    console.log(`Title:${movie.title}`);
    console.log(`Year Released:${movie.yearReleased}`);
    console.log(`Director:${movie.director}`);
    // console.log(`Title:${title}`);
    // if(yearReleased){
    //     console.log(`Year Released:${yearReleased}`)
    // }
    // for(const name of cast){
    //     console.log(`${name}`);
    // }
}
exports.PrintMovieInfo = PrintMovieInfo;
// PrintMovieInfo('A New Hope',1977,'Carrie','Mark','Harrison');
// let greeting: string = 'Hello Typescript!';
// console.log(greeting);
// let movieTitle: string = 'A New Hope';
let movieTitle = 'The Empire Strikes Back';
let scores = [70, 125, 85, 110];
let highScores;
highScores = scores.filter((element, index, array) => {
    if (element > 100) {
        return true;
    }
});
console.log(highScores);
scores.filter;
/* function LogMessage(message:string):void{
    console.log(message);
}
 */
const LogMessage = (message) => {
    console.log(message);
};
LogMessage("hello world");
//movieTitle = 10;
//does not work
//movieTitle='The Empire Strikes Back'
//since declared let, not const
let movieReview = GetReview(movieTitle);
console.log(`Movie title: ${movieTitle}`);
if (typeof (movieReview) == 'string') {
    console.log(`Review:${movieReview}`);
}
else {
    console.log(`Rating:${movieReview}/10`);
}
function GetTitles(director, streaming) {
    const allMovies = GetAllMovies();
    const searchResults = [];
    if (streaming !== undefined) {
        for (let movie of allMovies) {
            if (movie.director == director && movie.streaming == streaming) {
                searchResults.push(movie.title);
            }
        }
    }
    else {
        for (let movie of allMovies) {
            if (movie.director == director) {
                searchResults.push(movie.title);
            }
        }
    }
    return searchResults;
}
exports.GetTitles = GetTitles;
function Purge(inventory) {
    //implement some fancy business logic
    //return the purged items
    return inventory.splice(3, inventory.length);
}
exports.Purge = Purge;
function Greeter(target, context) {
    target.prototype.greet = function () {
        console.log("Hello Jasdhir!");
    };
}
let User = (() => {
    let _classDecorators = [Greeter];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var User = class {
        static {
            __esDecorate(null, _classDescriptor = { value: this }, _classDecorators, { kind: "class", name: this.name }, null, _classExtraInitializers);
            User = _classThis = _classDescriptor.value;
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return User = _classThis;
})();
let bytefer = new User();
bytefer.greet();
// console.log(GetAllMovies());
GetAllMovies().forEach(element => { console.log(element); });
console.log(GetTitles('George Lucas'));
let books = [
    { title: "The Hobbit" },
    { title: "1984" },
    { title: "Dune" },
    { title: "Foundation" },
    { title: "Snow Crash" }
];
books.forEach(item => console.log(item.title));
let purgedBooks = Purge(books);
console.log("\nPurged Books:");
purgedBooks.forEach(item => console.log(item.title));
console.log("\nremaining books:");
books.forEach(item => console.log(item.title));
//# sourceMappingURL=app.js.map