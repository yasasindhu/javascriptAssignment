
//one-liners
const printName = (name) => 
     'Hi' + name;

console.log(printName('sindhu'));


//using template
const printBill = (name, bill) => {
    return `Hi `+ name + `, please pay: ` + bill;
}
console.log(printBill('sindhu',700));


//object properties are destructed
const person = {
    name: 'Noam Chomsky',
    age: 92
}

const{name,age}=person;
console.log(name);
console.log(age);