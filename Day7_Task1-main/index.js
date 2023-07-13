class Movie{
    constructor(movieName,Studio,Rating){
        this.movieName=movieName;
        this.Studio=Studio;
        this.Rating=Rating||"PG";
    }
    getTitle(){
        return(`the Movie is ${this.movieName}`);
     }
    getStudio(){
        return(`created by The Studio Called ${this.Studio} `);
    }
    getPG(){
        return `The Rating Of The Movie Is${this.Rating}`;
    }
}
const sherlock_holmes = new Movie("Sherlock_holmes","Silver Pictures","PG13");
const avatar = new Movie("Avatar","20th Century Fox Lightstorm Entertainment","PG13");
const Vikram = new Movie("Vikram","Raaj Kamal Films International","20");
const evildead = new Movie("Evil dead","TriStar Pictures","pG24");

console.log(sherlock_holmes);
console.log(avatar);
console.log(Vikram);
console.log(evildead);

console.log(sherlock_holmes.getTitle());
console.log(sherlock_holmes.getStudio());
console.log(sherlock_holmes.getPG());

console.log(avatar.getTitle());
console.log(avatar.getStudio());
console.log(avatar.getPG());

console.log(Vikram.getTitle());
console.log(Vikram.getStudio());
console.log(Vikram.getPG());

console.log(evildead.getTitle());
console.log(evildead.getStudio());
console.log(evildead.getPG())