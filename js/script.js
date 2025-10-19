// input start
let age = 20;
let num = 30;
// if start
if(age > 18){
   if(num < 40){
      alert("You can come");
}
else{
   alert("You cannot come");
}
}
else{
   alert("You cannot come");
}

let name = "Najat";
let city = "Dhaka";
console.log("My name is " , name , " and I live in " , city);
console.log(`My name is ${name} and I live in ${city}`);


let number= 100;

if (number == 0) {
   console.log("Number is zero");
}
else if (number > 0 && number <= 20) {
       console.log("Number is between 1 and 20");
}
else if (number > 20 && number <= 40) {
         console.log("Number is between 21 and 40");
}
else if (number > 40 && number <= 60) {
       console.log("Number is between 41 and 60");
}
else if (number > 60 && number <= 100) {
         console.log("Congratulations!");
}
else{
   console.log("You must Go");
}
// if end
let s= 5

for( s==5; s<=50; s++){
   console.log(s);
}

// inputend

// loop start

let multiply = 123;

for(let i=1; i<=10; i++){
   console.log(`${multiply} x ${i} = ${multiply * i}`);
}
// loop end

// function start
// normal function start
function food(){
   console.log("I love biryani");
}
food();
// normal function end

// nameless function start

let drinks = function(){
   console.log("I love tea");
}
drinks();
// nameless function end
 
// arrow funtion start

let travel = () => {
   console.log("I love to travel");
}
travel();
// arrow funtion end
// function end

// array start
 
let fruits =[ "Mango", "Banana", "Orange", "Apple","Lichi"];
//  fruits.push("Grapes");
console.log(fruits);
console.log(fruits[0]);

let flowers = new Array("Rose", "Jasmin", "Sunflower,Tulip");
console.log(flowers);
console.log(flowers[2]);

// array  end

// object start
  
let student = {
   name: "Najat",
   age: 15,
   city: "Dhaka",
}
console.log(student);
console.log(student.name);
//  object end 

// array and obj start

let students = [
   {name: "Najat", age: 15, city: "Dhaka"},
   {name: "Nujhu", age: 16, city: "Noakhali"},
   {name: "Tashfi", age: 17, city: "Dhaka"},
]
console.log(students);
console.log(students[1].name);
console .log(students[2].city);
console .log(students[0].name);
// array and obj end

var myVariable = 10;
console.log(myVariable);

let myLetVariable = 20;
console.log(myLetVariable);

const myConstVariable = 30;
console.log(myConstVariable);
// variable end

let x = 3;

if (x != 10) {
  console.log("x is not equal to 3");
}
else {
  console.log("x is equal to 3");
}

let y = 0;
for ( let i = 0 ; i < 5 ; i++){
   y +=i;
}
console.log(y);

let z = [ 1, 2, 3];

 z[5] = 11;
console.log(z.length);



