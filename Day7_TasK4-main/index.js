//uber task:
class uber{
    constructor(distance,rate,waitingperiod){
        this.distance=distance;
        this.rate=rate;
        this.waitingperiod=waitingperiod;
}
setdistance(dist){
    this.distance=dist;
}
getRideDetails(){
    
    return(`the distance of ride is ${this.distance} KM and rate of ${this.rate} Rs with waitingperiod of ${this.waitingperiod} Min`)
}
getPrice(){
    let price=(this.distance*this.rate)+(this.waitingperiod*5);
    return(` the price for ride:${price} Rs`);
}
}
let person1=new uber(40,50,5);
person1.setdistance(30);
console.log(person1.getRideDetails());
console.log(person1.getPrice());