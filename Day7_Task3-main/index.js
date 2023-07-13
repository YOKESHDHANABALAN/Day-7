class person{
    constructor(firstname,lastname,age,place,education){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
        this.place=place;
        this.education=education;
    }
    getDetails(){
        return(`the name of person is${this.firstname} ${this.lastname} with age ${this.age}  He was born in ${this.place} Education is ${this.education}`);
    }
}
let person1=new person("Mass","sankar",22,"palani","Mechanical Engineering");
let person2=new person("sankar","mass",22,"palani","Full Stack Developer");

console.log(person1.getDetails());
console.log(person2.getDetails());