class Person {
    constructor(name = 'Anonymus', age = 0 ) {
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        // return 'Hi ' + this.name +  '!';
        return `Hi. I am ${this.name}`; //template strings
    }

    getDescription(){
        return `${this.name} is ${this.age} year's old.`;
    }
}


class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor(){
       return !!this.major; 
    }

    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor()) {
            description += ` Their majos is ${this.major} `
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
         if(this.homeLocation) {
             greeting += ` I'm visiting ${this.homeLocation}`;
         }

         return greeting;
    }
}


const me = new Traveler('Bianca', 24, 'Suceava');
const other = new Traveler(undefined, undefined, 'nowhere');
console.log(me.getGreeting());
console.log(other.getGreeting());