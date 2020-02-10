"use strict";

/*
let name = "Anastasiya";
const year = 1991;
function greetings (){
	console.log(`"Hi " + ${name}!`);
}
greetings();
*/

/*
for (let i = 15; i <= 30; i++){
	let arr = [];
	arr.unshift(i);
	console.log(arr);
}
*/

/*
let i = 15;
let arr = [];
do {
	arr.push(i);
	i++;
}while (i <= 30);
console.log(arr);
*/

/*
let arr = [];
for (let i = 15; i <= 30; i++){
	if (i%2 == 0) continue;
	arr.push(i);
}
console.log(arr);
*/

/*
function average (a, b){
	return (a+b)/2;
}
console.log(average(10, 15));



function squre (x){
	return Math.pow(x, 2);
}
console.log(squre(2));


function cube (x){
	return x**3;
}
console.log(cube(2));

const calculate = () => {
  const array = [];
  for (let i = 0; i <= 9; i++) {
    const x = average(squre(i), cube(i));
    array.push(x);
  }
  return array;
};
console.log(calculate());
*/


/*
function createUser (name, city){
	return {
		name: "Marcus Aurelius",
		city: "Roma"
	};
}
console.log(createUser());
*/

// const phonebook = [];
	
// 	phonebook.Marcus = {
// 		name: "Marcus Aurelius",
// 		phone: "+380445554433"
// 	}
	
// 	phonebook.Ana = {
// 		name: "Ana",
// 		phone: "+580123457898"
// 	};
// 	phonebook.Victor = {
// 		name: "Victor",
// 		phone: "+42346578000"
// 	};

// function findPhoneByName(name){
// 	for (let key in phonebook){
// 		if (phonebook[key].name === name){
// 			return phonebook[key].phone;
// 		}
// 	}
// };

// console.log(findPhoneByName("Marcus Aurelius"));