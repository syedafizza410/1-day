// ************** 100 days coding challenge "1 day" ************** //


// Q1 Install Node.js, TypeScript and VS Code on your computer/Laptop.//

/*Q2 Personal Message: Store a person’s name in a variable and print a message to them, 
like “Hello Asharib, would you like to learn some TypeScript today?”*/

let personName: string = "Asharib";

let message = `Hello ${personName}, would you like to learn some typescript today?`;

console.log(message);

/*Q3 Name Cases: Store a person’s name in a variable, and then print 
that person’s name in lowercase, uppercase, and titlecase.*/

let personName2 = "UmmeFizza"

console.log(personName2.toLowerCase());
console.log(personName2.toUpperCase());
console.log(personName2.replace(/\b\w/g, (char) => char.toUpperCase()));