// *** Object in JS-------------------------------
const person = {
    Name: " Punit Jaiswal",
    age: 22,
    gender: "Male",
    Ph_no: 7577820021,
    gmail: "punitjaiswal785621@gmail.com"
}

console.log(person);
console.log(person.gender, person.age);
console.log(person.gmail);

const person2 = { ...person, age: 23 } //Spread Operator :- To update the object------------------------------------
console.log(person2)


const { Name, age, gender } = person;// Object Destructuring-------------------------
console.log(Name, age, gender,)