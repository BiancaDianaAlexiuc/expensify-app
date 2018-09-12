//object destructuring 

// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Sv',
//         temp: 92
//     }
// };

// const {name: firstName = 'Anonymous', age} = person; //==>  this line is equivalent to the two lines bellow
// // const name = person.name;
// // const age = person.age;

// console.log(`${firstName} is ${age}. `);


// const {city, /*change name of variable -> */ temp: temperature} = person.location;


// if(city && temperature) {
//     console.log(`It's ${temperature} in ${city} `);
// }

// const book = {
//     title: 'Egi is th eEnemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self Publisher'} = book.publisher;

// console.log(publisherName); //Penguin, SelfPublisher

/*
For object destructuring we use {}
For array destructuring we use []
*/ 


/// array destructuring

const address =  ['Bujorilor', 'Suceava', 'Bdj', '720164'];

const [, city, state = 'NY'] = address;

console.log(`You are in ${city} ${state}.  `);

const item = ['Coffee (hot)', '$2.00', '%2.50', '$2.75'];

//grab first item and third

const [coffee, , medium, ] = item ;

console.log(`A medium ${coffee} costs ${medium} `);