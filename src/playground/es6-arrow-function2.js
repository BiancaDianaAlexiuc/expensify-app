//arguments object - no longer bound with arrow functions

const add = (a, b) => {
   
    return a + b;
};

console.log(add(55, 1, 1001));


//this keyword - no longer bound 

const user = {
    name: 'Andrew',
    cities: ['New York', 'Philadelphia', 'Dublin'],
    printPlacesLived(){
        return this.cities.map((city) => this.name + 'has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

//Challenge

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};

console.log(multiplier.multiply());